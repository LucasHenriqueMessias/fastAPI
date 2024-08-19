import { Module } from '@nestjs/common';
import { TabConsultorFinanceiroService } from './tab_consultor_financeiro.service';
import { TabConsultorFinanceiroController } from './tab_consultor_financeiro.controller';

@Module({
  controllers: [TabConsultorFinanceiroController],
  providers: [TabConsultorFinanceiroService],
})
export class TabConsultorFinanceiroModule {}
