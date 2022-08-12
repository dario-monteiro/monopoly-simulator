import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IAluguel } from 'src/useCases/aluguel/aluguel.interface';
import { ICompra } from 'src/useCases/compra/compra.interface';
import { IJogada } from '../jogada.interface';

export class Jogada implements IJogada {
  propriedades: Propriedade[];

  constructor(
    propriedades: Propriedade[],
    private readonly compraUseCase: ICompra,
    private readonly aluguelUseCase: IAluguel,
  ) {
    this.propriedades = propriedades;
  }

  jogar(jogador: Jogador): void {
    jogador.posicaoNoTabuleiro += this.jogarDado();
    if (jogador.posicaoNoTabuleiro > 19) {
      jogador.posicaoNoTabuleiro = jogador.posicaoNoTabuleiro - 20;
      jogador.saldo += 100;
    }
    const propriedade = this.propriedades[jogador.posicaoNoTabuleiro];

    if (!propriedade.proprietario) {
      if (jogador.comportamento.decideComprar(propriedade)) {
        this.compraUseCase.comprar(jogador, propriedade);
      }
    } else {
      this.aluguelUseCase.alugar(jogador, propriedade);
    }
  }

  private jogarDado(): number {
    return Math.random() * (7 - 1) + 1;
  }
}
