import { Injectable } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IComportamentoDeCompra } from '../comportamento-de-compra.interface';
import { ComportamentoDeCompra } from './comportamento-de-compra';

@Injectable()
export class ComportamentoDeCompraImpulsivo
  extends ComportamentoDeCompra
  implements IComportamentoDeCompra
{
  constructor() {
    super('Impulsivo');
  }

  getComportamento(): IComportamentoDeCompra {
    return this;
  }

  logicaDeDecisao(jogador: Jogador, propriedade: Propriedade): boolean {
    return (
      jogador.posicaoNoTabuleiro > 0 &&
      jogador.saldo - propriedade.custoDeVenda > 0
    );
  }
}
