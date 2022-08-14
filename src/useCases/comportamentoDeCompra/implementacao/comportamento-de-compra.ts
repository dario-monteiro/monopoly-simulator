import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';

export class ComportamentoDeCompra {
  tipoDeComportamento: string;

  constructor(tipoDeComportamento: string) {
    this.tipoDeComportamento = tipoDeComportamento;
  }

  getTipoDeComportamento(): string {
    return this.tipoDeComportamento;
  }

  decisaoDeCompra(jogador: Jogador, propriedade: Propriedade): boolean {
    return jogador.comportamento.logicaDeDecisao(jogador, propriedade);
  }
}
