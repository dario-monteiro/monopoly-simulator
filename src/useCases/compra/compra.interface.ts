import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';

export interface ICompra {
  comprar(jogador: Jogador, propriedade: Propriedade): void;
}
