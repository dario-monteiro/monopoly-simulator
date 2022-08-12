import { Jogador } from 'src/models/jogador';

export class ComportamentoDeCompra {
  jogador: Jogador;
  tipoDeComportamento: string;

  constructor(jogador: Jogador, tipoDeComportamento: string) {
    this.jogador = jogador;
    this.tipoDeComportamento = tipoDeComportamento;
  }
}
