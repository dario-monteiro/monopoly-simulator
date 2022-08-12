import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { ICompra } from '../compra.interface';

export class Compra implements ICompra {
  comprar(jogador: Jogador, propriedade: Propriedade): void {
    jogador.saldo -= propriedade.custoDeVenda;
    propriedade.proprietario = jogador;
    jogador.propriedades.push(propriedade);

    console.log(
      `O Jogador ${jogador.comportamento.getTipoDeComportamento()} comprou a propriedade ${
        propriedade.nome
      }!`,
    );
  }
}
