import { Propriedade } from 'src/models/propriedade';

export interface IComportamentoDeCompra {
  decideComprar(propriedade: Propriedade): boolean;
  getTipoDeComportamento(): string;
}
