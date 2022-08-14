import { Injectable } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { ITerminoPartida } from '../termino-partida.interface';

@Injectable()
export class TerminoPartida implements ITerminoPartida {
  vitoria(turno: Jogador[]): any {
    turno = turno.sort((jogador1: Jogador, jogador2: Jogador) => {
      return this.condicaoOrdenacao(jogador1, jogador2);
    });
    console.log(
      `O jogador ${turno[0].comportamento.getTipoDeComportamento()} venceu a partida!`,
    );

    console.log('FIM DA PARTIDA');

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
    if (jogador1.saldo > jogador2.saldo) {
      return -1;
    } else if (jogador1.saldo < jogador2.saldo) {
      return 1;
    } else if (jogador1.saldo === jogador2.saldo) {
      if (jogador1.ordemDeTurno > jogador2.ordemDeTurno) {
        return -1;
      } else {
        return 1;
      }
    }
  }
}
