import { Module } from '@nestjs/common';
import { TabAnalistaFinanceiroService } from './tab_analista_financeiro.service';
import { TabAnalistaFinanceiroController } from './tab_analista_financeiro.controller';

@Module({
  controllers: [TabAnalistaFinanceiroController],
  providers: [TabAnalistaFinanceiroService],
})
export class TabAnalistaFinanceiroModule {}
