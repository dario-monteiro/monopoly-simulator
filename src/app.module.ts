import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AluguelModule } from './useCases/aluguel/aluguel.module';
import { ComecoPartidaModule } from './useCases/comecoPartida/comeco-partida.module';
import { ComportamentoDeCompraModule } from './useCases/comportamentoDeCompra/comportamento-de-compra.module';
import { CompraModule } from './useCases/compra/compra.module';
import { EliminacaoModule } from './useCases/eliminacao/eliminacao.module';
import { JogadaModule } from './useCases/jogada/jogada.module';
import { PartidaModule } from './useCases/partida/partida.module';
import { RodadaModule } from './useCases/rodada/rodada.module';
import { SorteioDadoModule } from './useCases/sorteioDado/sorteio-dado.module';
import { TerminoPartidaModule } from './useCases/terminoPartida/termino-partida.module';

@Module({
  imports: [
    AluguelModule,
    ComecoPartidaModule,
    ComportamentoDeCompraModule,
    CompraModule,
    EliminacaoModule,
    JogadaModule,
    PartidaModule,
    RodadaModule,
    SorteioDadoModule,
    TerminoPartidaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
