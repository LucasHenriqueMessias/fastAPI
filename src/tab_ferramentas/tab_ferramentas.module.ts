import { Module } from '@nestjs/common';
import { TabFerramentasService } from './tab_ferramentas.service';
import { TabFerramentasController } from './tab_ferramentas.controller';

@Module({
  controllers: [TabFerramentasController],
  providers: [TabFerramentasService],
})
export class TabFerramentasModule {}
