import { Inject, Injectable } from '@nestjs/common';
import { Constantes } from 'src/config/constantes';
import { Utils } from 'src/config/utils';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IComportamentoDeCompra } from 'src/useCases/comportamentoDeCompra/comportamento-de-compra.interface';
import { ISorteioDado } from 'src/useCases/sorteioDado/sorteio-dado.interface';
import { IComecoPartida } from '../comeco-partida.interface';

@Injectable()
export class ComecoPartida implements IComecoPartida {
  constructor(
    @Inject('ISorteioDado')
    private readonly sorteioDadoUseCase: ISorteioDado,
    @Inject('ComportamentoDeCompraImpulsivo')
    private readonly impulsivoUseCase: IComportamentoDeCompra,
    @Inject('ComportamentoDeCompraExigente')
    private readonly exigenteUseCase: IComportamentoDeCompra,
    @Inject('ComportamentoDeCompraCauteloso')
    private readonly cautelosoUseCase: IComportamentoDeCompra,
    @Inject('ComportamentoDeCompraAleatorio')
    private readonly AleatorioUseCase: IComportamentoDeCompra,
  ) {}

  async gerarTabuleiro(): Promise<Propriedade[]> {
    const tabuleiro = await Utils.buildObjectFromFile(
      './src/data/tabuleiro.json',
    );
    return tabuleiro.propriedades;
  }

  definirTurno(): Jogador[] {
    let turno: Jogador[] = [];

    turno.push(
      new Jogador(
        this.sortearOrdem(turno),
        Constantes.SALDO_INICIAL,
        this.impulsivoUseCase.getComportamento(),
      ),
    );

    turno.push(
      new Jogador(
        this.sortearOrdem(turno),
        Constantes.SALDO_INICIAL,
        this.exigenteUseCase.getComportamento(),
      ),
    );

    turno.push(
      new Jogador(
        this.sortearOrdem(turno),
        Constantes.SALDO_INICIAL,
        this.cautelosoUseCase.getComportamento(),
      ),
    );

    turno.push(
      new Jogador(
        this.sortearOrdem(turno),
        Constantes.SALDO_INICIAL,
        this.AleatorioUseCase.getComportamento(),
      ),
    );

    turno = turno.sort((jogador1: Jogador, jogador2: Jogador) => {
      return this.condicaoOrdenacao(jogador1, jogador2);
    });

    console.log(`Definida ordem dos Jogadores:`);

    return this.redefinirOrderDeTurno(turno);
  }

  private sortearOrdem(turno: Jogador[]): number {
    const valorDado = this.sorteioDadoUseCase.lancar();
    let valorRepetido = false;

    turno.forEach((jogador) => {
      valorRepetido = jogador.ordemDeTurno === valorDado;
    });

    if (valorRepetido) {
      this.sortearOrdem(turno);
    }
    return valorDado;
  }

  private condicaoOrdenacao(jogador1: Jogador, jogador2: Jogador) {
    return jogador1.ordemDeTurno > jogador2.ordemDeTurno
      ? 1
      : jogador1.ordemDeTurno < jogador2.ordemDeTurno
      ? -1
      : 0;
  }

  private redefinirOrderDeTurno(turno: Jogador[]): Jogador[] {
    let indice = 0;
    return turno.map((jogador) => {
      jogador.ordemDeTurno = indice;
      console.log(`Jogador ${jogador.comportamento.getTipoDeComportamento()}`);
      indice++;
      return jogador;
    });
  }
}
