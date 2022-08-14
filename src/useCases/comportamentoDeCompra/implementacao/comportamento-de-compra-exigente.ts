import { Injectable } from '@nestjs/common';
import { Constantes } from 'src/config/constantes';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
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
      jogador.saldo - propriedade.custoDeVenda > 0 &&
      propriedade.valorDeAluguel > Constantes.ALUGUEL_MIN_EXIGIDO
    );
  }
}
