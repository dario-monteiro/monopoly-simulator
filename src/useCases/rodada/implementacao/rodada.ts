import { Jogador } from 'src/models/jogador';
import { IEliminacao } from 'src/useCases/eliminacao/eliminacao.interface';
import { IJogada } from 'src/useCases/jogada/jogada.interface';
import { ITerminoPartida } from 'src/useCases/terminoPartida/termino-partida.interface';
import { IRodada } from '../rodada.interface';

export class Rodada implements IRodada {
  constructor(
    private readonly jogadaUseCase: IJogada,
    private readonly eliminacaoUseCase: IEliminacao,
    private readonly terminoUseCase: ITerminoPartida,
  ) {}

  executar(turno: Jogador[]): void {
    turno.forEach((jogador) => {
      this.jogadaUseCase.jogar(jogador);
      if (jogador.saldo < 0) {
        this.eliminacaoUseCase.eliminar(jogador);
        turno.splice(jogador.ordemDeTurno - 1);
        if (turno.length === 1) {
          this.terminoUseCase.vitoriaPorSobrevivencia();
        }
      }
    });
  }
}
