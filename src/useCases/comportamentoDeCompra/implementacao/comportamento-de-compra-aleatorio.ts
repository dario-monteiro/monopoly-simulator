import { Injectable } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IComportamentoDeCompra } from '../comportamento-de-compra.interface';
import { ComportamentoDeCompra } from './comportamento-de-compra';

@Injectable()
export class ComportamentoDeCompraAleatorio
  extends ComportamentoDeCompra
  implements IComportamentoDeCompra
{
  constructor() {
    super('Aleatório');
  }

  getComportamento(): IComportamentoDeCompra {
    return this;
  }

  private getRandomDecision() {
    return Math.floor(Math.random() * (3 - 1)) + 1;
  }

  logicaDeDecisao(jogador: Jogador, propriedade: Propriedade): boolean {
    return (
      jogador.saldo - propriedade.custoDeVenda > 0 &&
      this.getRandomDecision() == 2
    );
  }
}
