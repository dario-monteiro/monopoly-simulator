import { Injectable } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { ITerminoPartida } from '../termino-partida.interface';

@Injectable()
export class TerminoPartida implements ITerminoPartida {
  vitoria(turno: Jogador[]): any {
    turno = turno.sort((jogador1: Jogador, jogador2: Jogador) => {
      return this.condicaoOrdenacao(jogador1, jogador2);
    });
    return this.formataResposta(turno);
  }

  private formataResposta(turno: Jogador[]): any {
    return {
      vencedor: turno[0].comportamento.getTipoDeComportamento(),
      jogadores: [
        turno[0].comportamento.getTipoDeComportamento(),
        turno[1].comportamento.getTipoDeComportamento(),
        turno[2].comportamento.getTipoDeComportamento(),
        turno[3].comportamento.getTipoDeComportamento(),
      ],
    };
  }

  private condicaoOrdenacao(jogador1: Jogador, jogador2: Jogador) {
    return jogador1.saldo > jogador2.saldo ||
      jogador1.ordemDeTurno > jogador2.ordemDeTurno
      ? 1
      : jogador1.saldo < jogador2.saldo ||
        jogador1.ordemDeTurno < jogador2.ordemDeTurno
      ? -1
      : 0;
  }
}
