import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';

export interface IComecoPartida {
  gerarTabuleiro(): Promise<Propriedade[]>;
  definirTurno(): Jogador[];
}
