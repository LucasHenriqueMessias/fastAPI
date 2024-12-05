import { Module } from '@nestjs/common';
import { TabEventoService } from './tab_evento.service';
import { TabEventoController } from './tab_evento.controller';

@Module({
  controllers: [TabEventoController],
  providers: [TabEventoService],
})
export class TabEventoModule {}
