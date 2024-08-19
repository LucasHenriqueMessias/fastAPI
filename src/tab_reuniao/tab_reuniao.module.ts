import { Module } from '@nestjs/common';
import { TabReuniaoService } from './tab_reuniao.service';
import { TabReuniaoController } from './tab_reuniao.controller';

@Module({
  controllers: [TabReuniaoController],
  providers: [TabReuniaoService],
})
export class TabReuniaoModule {}
