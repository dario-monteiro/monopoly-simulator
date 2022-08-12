import { Jogador } from 'src/models/jogador';

export interface IEliminacao {
  eliminar(jogador: Jogador): void;
}
