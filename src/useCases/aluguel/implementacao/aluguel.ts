import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IAluguel } from '../aluguel.interface';

export class Aluguel implements IAluguel {
  alugar(jogador: Jogador, propriedade: Propriedade): void {
    jogador.saldo -= propriedade.valorDeAluguel;
    propriedade.proprietario.saldo += propriedade.valorDeAluguel;

    console.log(
      `O Jogador ${jogador.comportamento.getTipoDeComportamento()} alugou a propriedade ${
        propriedade.nome
      }!`,
    );
  }
}
