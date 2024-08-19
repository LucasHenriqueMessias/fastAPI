import { Module } from '@nestjs/common';
import { TabConsultorComercialService } from './tab_consultor_comercial.service';
import { TabConsultorComercialController } from './tab_consultor_comercial.controller';

@Module({
  controllers: [TabConsultorComercialController],
  providers: [TabConsultorComercialService],
})
export class TabConsultorComercialModule {}
