import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';

export interface IRodada {
  executar(
    terminoPartida: boolean,
    turno: Jogador[],
    propriedades: Propriedade[],
  ): [boolean, Jogador[], Propriedade[]];
}
