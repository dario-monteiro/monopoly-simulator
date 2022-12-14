import { Inject, Injectable, Logger } from '@nestjs/common';
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
  private readonly logger = new Logger(Jogada.name);

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

  private jogadorNaoEProprietario(
    jogador: Jogador,
    propriedade: Propriedade,
  ): boolean {
    return (
      propriedade.proprietario.comportamento.getTipoDeComportamento() !=
      jogador.comportamento.getTipoDeComportamento()
    );
  }

  jogar(jogador: Jogador, propriedades: Propriedade[]): [Jogador, Propriedade] {
    const valorDado = this.sorteioDadoUseCase.lancar();

    this.logger.log(
      `O Jogador ${jogador.comportamento.getTipoDeComportamento()} tirou ${valorDado} no dado`,
    );

    jogador.posicaoNoTabuleiro += valorDado;

    if (jogador.posicaoNoTabuleiro > Constantes.MAX_POSICOES - 1) {
      jogador.posicaoNoTabuleiro =
        jogador.posicaoNoTabuleiro - Constantes.MAX_POSICOES;
      jogador.saldo += Constantes.SALDO_GANHO_RODADA;
      this.logger.log(
        `\nO jogador ${jogador.comportamento.getTipoDeComportamento()} completou uma volta e ganhou ${
          Constantes.SALDO_GANHO_RODADA
        }\n`,
      );
    }
    let propriedade = propriedades[jogador.posicaoNoTabuleiro];

    this.logger.log(
      `O Jogador ${jogador.comportamento.getTipoDeComportamento()} caiu na propriedade ${
        propriedade.nome
      }, que custa ${propriedade.custoDeVenda} para compra e ${
        propriedade.valorDeAluguel
      } para alugar`,
    );

    if (!propriedade.proprietario) {
      if (this.comportamentoUseCase.decisaoDeCompra(jogador, propriedade)) {
        [jogador, propriedade] = this.compraUseCase.comprar(
          jogador,
          propriedade,
        );
      }
    } else if (
      jogador.posicaoNoTabuleiro > 0 &&
      this.jogadorNaoEProprietario(jogador, propriedade)
    ) {
      [jogador, propriedade] = this.aluguelUseCase.pagarAluguel(
        jogador,
        propriedade,
      );
    }
    this.logger.log(
      `Saldo do Jogador ${jogador.comportamento.getTipoDeComportamento()}: ${
        jogador.saldo
      }`,
    );
    return [jogador, propriedade];
  }
}
