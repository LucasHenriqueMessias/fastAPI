import { Module } from '@nestjs/common';
import { TabProspeccaoService } from './tab_prospeccao.service';
import { TabProspeccaoController } from './tab_prospeccao.controller';

@Module({
  controllers: [TabProspeccaoController],
  providers: [TabProspeccaoService],
})
export class TabProspeccaoModule {}
