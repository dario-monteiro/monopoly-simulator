import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';

export interface IComportamentoDeCompra {
  decisaoDeCompra(jogador: Jogador, propriedade: Propriedade): boolean;
  logicaDeDecisao(jogador: Jogador, propriedade: Propriedade): boolean;
  getTipoDeComportamento(): string;
  getComportamento(): IComportamentoDeCompra;
}
