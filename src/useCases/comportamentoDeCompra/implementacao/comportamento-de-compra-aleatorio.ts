import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IComportamentoDeCompra } from '../comportamento-de-compra.interface';
import { ComportamentoDeCompra } from './comportamento-de-compra';

export class ComportamentoDeCompraAleatorio
  extends ComportamentoDeCompra
  implements IComportamentoDeCompra
{
  constructor(jogador: Jogador) {
    super(jogador, 'Aleatório');
  }

  getTipoDeComportamento(): string {
    return this.tipoDeComportamento;
  }

  private getRandomDecision() {
    return Math.random() * (3 - 1) + 1;
  }

  decideComprar(propriedade: Propriedade): boolean {
    return (
      this.jogador.saldo - propriedade.custoDeVenda > 0 &&
      this.getRandomDecision() == 2
    );
  }
}
