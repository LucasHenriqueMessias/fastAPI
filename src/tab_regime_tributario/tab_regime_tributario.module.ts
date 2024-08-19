import { Module } from '@nestjs/common';
import { TabRegimeTributarioService } from './tab_regime_tributario.service';
import { TabRegimeTributarioController } from './tab_regime_tributario.controller';

@Module({
  controllers: [TabRegimeTributarioController],
  providers: [TabRegimeTributarioService],
})
export class TabRegimeTributarioModule {}
