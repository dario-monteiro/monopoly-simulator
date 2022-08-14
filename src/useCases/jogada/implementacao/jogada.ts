import { Inject, Injectable } from '@nestjs/common';
import { Constantes } from 'src/config/constantes';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IAluguel } from 'src/useCases/aluguel/aluguel.interface';
import { IComportamentoDeCompra } from 'src/useCases/comportamentoDeCompra/comportamento-de-compra.interface';
import { ICompra } from 'src/useCases/compra/compra.interface';
import { ISorteioDado } from 'src/useCases/sorteioDado/sorteio-dado.interface';
import { IJogada } from '../jogada.interface';

@Injectable()
export class Jogada implements IJogada {
  constructor(
    @Inject('ICompra')
    private readonly compraUseCase: ICompra,
    @Inject('IAluguel')
    private readonly aluguelUseCase: IAluguel,
    @Inject('ISorteioDado')
    private readonly sorteioDadoUseCase: ISorteioDado,
    @Inject('IComportamentoDeCompra')
    private readonly comportamentoUseCase: IComportamentoDeCompra,
  ) {}

  jogar(jogador: Jogador, propriedades: Propriedade[]): [Jogador, Propriedade] {
    const valorDado = this.sorteioDadoUseCase.lancar();
    jogador.posicaoNoTabuleiro += valorDado;

    if (jogador.posicaoNoTabuleiro > Constantes.MAX_POSICOES - 1) {
      jogador.posicaoNoTabuleiro =
        jogador.posicaoNoTabuleiro - Constantes.MAX_POSICOES;
      jogador.saldo += Constantes.SALDO_GANHO_RODADA;
    }
    let propriedade =
      propriedades[
        jogador.posicaoNoTabuleiro - 1 < 1 ? 1 : jogador.posicaoNoTabuleiro - 1
      ];
    if (!propriedade.proprietario) {
      if (this.comportamentoUseCase.decisaoDeCompra(jogador, propriedade)) {
        [jogador, propriedade] = this.compraUseCase.comprar(
          jogador,
          propriedade,
        );
      }
    } else {
      [jogador, propriedade] = this.aluguelUseCase.pagarAluguel(
        jogador,
        propriedade,
      );
    }
    return [jogador, propriedade];
  }
}
