import { Inject, Injectable } from '@nestjs/common';
import { IPartida } from './useCases/partida/partida.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject('IPartida')
    private readonly partidaUseCase: IPartida,
  ) {}
  simular(): any {
    return this.partidaUseCase.simular();
  }
}
