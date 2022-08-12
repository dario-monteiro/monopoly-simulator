import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IComecoPartida } from '../comeco-partida.interface';

export class ComecoPartida implements IComecoPartida {
  gerarTabuleiro(): Propriedade[] {
    throw new Error('Method not implemented.');
  }
  sortearTurno(): Jogador[] {
    throw new Error('Method not implemented.');
  }
}
