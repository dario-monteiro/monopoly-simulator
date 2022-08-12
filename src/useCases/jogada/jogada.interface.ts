import { Jogador } from 'src/models/jogador';

export interface IJogada {
  jogar(jogador: Jogador): void;
}
