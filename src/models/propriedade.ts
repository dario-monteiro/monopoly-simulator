import { Jogador } from './jogador';

export class Propriedade {
  ordemNoTabuleiro: number;
  nome: string;
  custoDeVenda: number;
  valorDeAluguel: number;
  proprietario: Jogador;

  constructor(
    ordem: number,
    nome: string,
    custoDeVenda: number,
    valorDeAluguel: number,
  ) {
    this.ordemNoTabuleiro = ordem;
    this.nome = nome;
    this.custoDeVenda = custoDeVenda;
    this.valorDeAluguel = valorDeAluguel;
    this.proprietario = undefined;
  }
}
