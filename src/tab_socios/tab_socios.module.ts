import { Module } from '@nestjs/common';
import { TabSociosService } from './tab_socios.service';
import { TabSociosController } from './tab_socios.controller';

@Module({
  controllers: [TabSociosController],
  providers: [TabSociosService],
})
export class TabSociosModule {}
