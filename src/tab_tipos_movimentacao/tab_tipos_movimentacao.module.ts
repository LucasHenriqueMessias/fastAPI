import { Module } from '@nestjs/common';
import { TabTiposMovimentacaoService } from './tab_tipos_movimentacao.service';
import { TabTiposMovimentacaoController } from './tab_tipos_movimentacao.controller';

@Module({
  controllers: [TabTiposMovimentacaoController],
  providers: [TabTiposMovimentacaoService],
})
export class TabTiposMovimentacaoModule {}
