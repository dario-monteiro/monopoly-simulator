import { IComportamentoDeCompra } from 'src/useCases/comportamentoDeCompra/comportamento-de-compra.interface';
import { Propriedade } from './propriedade';

export class Jogador {
  ordemDeTurno: number;
  saldo: number;
  comportamento: IComportamentoDeCompra;
  propriedades: Propriedade[];
  posicaoNoTabuleiro: number;
  eliminado: boolean;

  constructor(
    ordem: number,
    saldo: number,
    comportamento: IComportamentoDeCompra,
  ) {
    this.ordemDeTurno = ordem;
    this.saldo = saldo;
    this.comportamento = comportamento;
    this.propriedades = [];
    this.posicaoNoTabuleiro = 0;
    this.eliminado = false;
  }
}
