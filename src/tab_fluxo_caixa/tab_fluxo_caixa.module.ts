import { Module } from '@nestjs/common';
import { TabFluxoCaixaService } from './tab_fluxo_caixa.service';
import { TabFluxoCaixaController } from './tab_fluxo_caixa.controller';

@Module({
  controllers: [TabFluxoCaixaController],
  providers: [TabFluxoCaixaService],
})
export class TabFluxoCaixaModule {}
