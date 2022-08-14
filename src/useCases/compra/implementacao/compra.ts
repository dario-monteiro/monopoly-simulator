import { Injectable } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { ICompra } from '../compra.interface';

@Injectable()
export class Compra implements ICompra {
  comprar(jogador: Jogador, propriedade: Propriedade): [Jogador, Propriedade] {
    jogador.saldo -= propriedade.custoDeVenda;
    propriedade.proprietario = jogador;
    jogador.propriedades.push(propriedade);

    console.log(
      `O Jogador ${jogador.comportamento.getTipoDeComportamento()} comprou a propriedade ${
        propriedade.nome
      }!`,
    );
    return [jogador, propriedade];
  }
}
