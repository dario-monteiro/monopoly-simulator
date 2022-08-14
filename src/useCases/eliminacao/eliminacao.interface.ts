import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';

export interface IEliminacao {
  eliminar(jogador: Jogador): [Jogador, Propriedade[]];
}
