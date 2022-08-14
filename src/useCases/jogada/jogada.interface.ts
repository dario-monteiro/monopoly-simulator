import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';

export interface IJogada {
  jogar(jogador: Jogador, propriedades: Propriedade[]): [Jogador, Propriedade];
}
