import { Jogador } from 'src/models/jogador';
import { IEliminacao } from '../eliminacao.interface';

export class Eliminacao implements IEliminacao {
  eliminar(jogador: Jogador): void {
    jogador.propriedades.forEach((propriedade) => {
      propriedade.proprietario = undefined;
    });
    jogador.propriedades = undefined;
    console.log(
      `O Jogador ${jogador.comportamento.getTipoDeComportamento()} foi eliminado do jogo!`,
    );
  }
}
