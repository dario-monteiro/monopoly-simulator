import { Jogador } from 'src/models/jogador';

export interface IRodada {
  executar(turno: Jogador[]): void;
}
