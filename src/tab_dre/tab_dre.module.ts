import { Module } from '@nestjs/common';
import { TabDreService } from './tab_dre.service';
import { TabDreController } from './tab_dre.controller';

@Module({
  controllers: [TabDreController],
  providers: [TabDreService],
})
export class TabDreModule {}
