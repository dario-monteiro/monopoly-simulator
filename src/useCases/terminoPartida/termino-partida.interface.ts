import { Jogador } from 'src/models/jogador';

export interface ITerminoPartida {
  vitoria(turno: Jogador[]): any;
}
