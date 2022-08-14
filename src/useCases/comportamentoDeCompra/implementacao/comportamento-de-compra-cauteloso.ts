import { Injectable } from '@nestjs/common';
import { Constantes } from 'src/config/constantes';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IComportamentoDeCompra } from '../comportamento-de-compra.interface';
import { ComportamentoDeCompra } from './comportamento-de-compra';

@Injectable()
export class ComportamentoDeCompraCauteloso
  extends ComportamentoDeCompra
  implements IComportamentoDeCompra
{
  constructor() {
    super('Cauteloso');
  }

  getComportamento(): IComportamentoDeCompra {
    return this;
  }

  logicaDeDecisao(jogador: Jogador, propriedade: Propriedade): boolean {
    return (
      jogador.saldo - propriedade.custoDeVenda >= Constantes.SALDO_MIN_CAUTELA
    );
  }
}
