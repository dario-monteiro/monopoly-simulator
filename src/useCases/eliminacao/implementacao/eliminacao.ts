import { Injectable, Logger } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IEliminacao } from '../eliminacao.interface';

@Injectable()
export class Eliminacao implements IEliminacao {
  private readonly logger = new Logger(Eliminacao.name);

  eliminar(jogador: Jogador): [Jogador, Propriedade[]] {
    const propriedadesLiberadas: Propriedade[] = [];
    jogador.propriedades.forEach((propriedade) => {
      propriedade.proprietario = undefined;
      propriedadesLiberadas.push(propriedade);
    });

    jogador.propriedades = undefined;
    jogador.eliminado = true;

    this.logger.log(
      `\nO Jogador ${jogador.comportamento.getTipoDeComportamento()} foi eliminado do jogo!\n`,
    );
    return [jogador, propriedadesLiberadas];
  }
}
