import { Inject, Injectable } from '@nestjs/common';
import { Constantes } from 'src/config/constantes';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IComecoPartida } from 'src/useCases/comecoPartida/comeco-partida.interface';
import { IRodada } from 'src/useCases/rodada/rodada.interface';
import { ITerminoPartida } from 'src/useCases/terminoPartida/termino-partida.interface';
import { IPartida } from '../partida.interface';

@Injectable()
export class Partida implements IPartida {
  contadorRodadas: number;
  terminoPartida: boolean;
  propriedades: Propriedade[];
  turno: Jogador[];

  constructor(
    @Inject('IRodada')
    private readonly rodadaUseCase: IRodada,
    @Inject('IComecoPartida')
    private readonly comecoUseCase: IComecoPartida,
    @Inject('ITerminoPartida')
    private readonly terminoUseCase: ITerminoPartida,
  ) {}

  async simular(): Promise<any> {
    console.log('INICIO DA PARTIDA');

    this.contadorRodadas = 0;
    this.propriedades = await this.comecoUseCase.gerarTabuleiro();
    this.turno = this.comecoUseCase.definirTurno();

    do {
      this.contadorRodadas++;
      this.terminoPartida = false;
      [this.terminoPartida, this.turno, this.propriedades] =
        this.rodadaUseCase.executar(
          this.terminoPartida,
          this.turno,
          this.propriedades,
        );

      if (this.contadorRodadas === Constantes.MAX_RODADAS) {
        console.log(
          `A partida foi encerrada ao atingir o número máximo de ${Constantes.MAX_RODADAS} rodadas.`,
        );
      }

      if (this.terminoPartida) {
        this.contadorRodadas = Constantes.MAX_RODADAS;
      }
    } while (this.contadorRodadas < Constantes.MAX_RODADAS);

    return this.terminoUseCase.vitoria(this.turno);
  }
}
