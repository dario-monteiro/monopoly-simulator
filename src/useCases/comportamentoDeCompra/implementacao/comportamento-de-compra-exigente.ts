import { Injectable } from '@nestjs/common';
import { Constantes } from '../../../config/constantes';
import { Jogador } from '../../../models/jogador';
import { Propriedade } from '../../../models/propriedade';
import { IComportamentoDeCompra } from '../comportamento-de-compra.interface';
import { ComportamentoDeCompra } from './comportamento-de-compra';

@Injectable()
export class ComportamentoDeCompraExigente
  extends ComportamentoDeCompra
  implements IComportamentoDeCompra
{
  constructor() {
    super('Exigente');
  }

  getComportamento(): IComportamentoDeCompra {
    return this;
  }

  logicaDeDecisao(jogador: Jogador, propriedade: Propriedade): boolean {
    return (
      jogador.posicaoNoTabuleiro > 0 &&
      jogador.saldo - propriedade.custoDeVenda > 0 &&
      propriedade.valorDeAluguel > Constantes.ALUGUEL_MIN_EXIGIDO
    );
  }
}
