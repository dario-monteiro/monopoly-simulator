import { Injectable, Logger } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { ICompra } from '../compra.interface';

@Injectable()
export class Compra implements ICompra {
  private readonly logger = new Logger(Compra.name);

  comprar(jogador: Jogador, propriedade: Propriedade): [Jogador, Propriedade] {
    jogador.saldo -= propriedade.custoDeVenda;
    propriedade.proprietario = jogador;
    jogador.propriedades.push(propriedade);

    this.logger.log(
      `O Jogador ${jogador.comportamento.getTipoDeComportamento()} comprou a propriedade ${
        propriedade.nome
      }, pelo custo de ${propriedade.custoDeVenda}!`,
    );
    return [jogador, propriedade];
  }
}
