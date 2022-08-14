import { Inject, Injectable } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IEliminacao } from 'src/useCases/eliminacao/eliminacao.interface';
import { IJogada } from 'src/useCases/jogada/jogada.interface';
import { ITerminoPartida } from 'src/useCases/terminoPartida/termino-partida.interface';
import { IRodada } from '../rodada.interface';

@Injectable()
export class Rodada implements IRodada {
  constructor(
    @Inject('IJogada')
    private readonly jogadaUseCase: IJogada,
    @Inject('IEliminacao')
    private readonly eliminacaoUseCase: IEliminacao,
    @Inject('ITerminoPartida')
    private readonly terminoUseCase: ITerminoPartida,
  ) {}

  executar(
    terminoPartida: boolean,
    turno: Jogador[],
    propriedades: Propriedade[],
  ): [boolean, Jogador[], Propriedade[]] {
    turno.forEach((jogador) => {
      if (jogador.eliminado) return;

      let propriedade: Propriedade = undefined;
      [jogador, propriedade] = this.jogadaUseCase.jogar(jogador, propriedades);

      if (jogador.saldo < 0) {
        let propriedadesLiberadas: Propriedade[] = [];
        [jogador, propriedadesLiberadas] =
          this.eliminacaoUseCase.eliminar(jogador);

        turno[jogador.ordemDeTurno] = jogador;
        turno[propriedade.proprietario.ordemDeTurno] = propriedade.proprietario;

        propriedadesLiberadas.forEach((propriedadeLiberada) => {
          propriedades[propriedadeLiberada.ordemNoTabuleiro - 1] =
            propriedadeLiberada;
        });
        if (turno.filter((jogador) => !jogador.eliminado).length === 1) {
          terminoPartida = true;
        }
      }
      propriedades[propriedade.ordemNoTabuleiro - 1] = propriedade;
    });
    return [terminoPartida, turno, propriedades];
  }
}
