import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IComportamentoDeCompra } from '../comportamento-de-compra.interface';
import { ComportamentoDeCompra } from './comportamento-de-compra';

export class ComportamentoDeCompraCauteloso
  extends ComportamentoDeCompra
  implements IComportamentoDeCompra
{
  constructor(jogador: Jogador) {
    super(jogador, 'Cauteloso');
  }

  getTipoDeComportamento(): string {
    return this.tipoDeComportamento;
  }

  decideComprar(propriedade: Propriedade): boolean {
    return this.jogador.saldo - propriedade.custoDeVenda > 79;
  }
}
