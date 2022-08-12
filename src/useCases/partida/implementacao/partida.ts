import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IComecoPartida } from 'src/useCases/comecoPartida/comeco-partida.interface';
import { IRodada } from 'src/useCases/rodada/rodada.interface';
import { ITerminoPartida } from 'src/useCases/terminoPartida/termino-partida.interface';
import { IPartida } from '../partida.interface';

export class Partida implements IPartida {
  contadorRodadas: number;
  propriedades: Propriedade[];
  turno: Jogador[];

  constructor(
    private readonly rodadaUseCase: IRodada,
    private readonly comecoUseCase: IComecoPartida,
    private readonly terminoUseCase: ITerminoPartida,
  ) {}

  simular(): void {
    this.contadorRodadas = 0;
    this.propriedades = this.comecoUseCase.gerarTabuleiro();
    this.turno = this.comecoUseCase.sortearTurno();

    do {
      this.contadorRodadas++;
      this.rodadaUseCase.executar(this.turno);
    } while (this.contadorRodadas < 1000);

    this.terminoUseCase.vitoriaPorMaximoRodadas();
  }
}
