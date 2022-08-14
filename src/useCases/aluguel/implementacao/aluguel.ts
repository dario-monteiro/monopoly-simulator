import { Injectable } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IAluguel } from '../aluguel.interface';

@Injectable()
export class Aluguel implements IAluguel {
  pagarAluguel(
    jogador: Jogador,
    propriedade: Propriedade,
  ): [Jogador, Propriedade] {
    jogador.saldo -= propriedade.valorDeAluguel;
    propriedade.proprietario.saldo += propriedade.valorDeAluguel;

    console.log(
      `O Jogador ${jogador.comportamento.getTipoDeComportamento()} pagou aluguel da propriedade ${
        propriedade.nome
      }!`,
    );
    return [jogador, propriedade];
  }
}
