import { Injectable } from '@nestjs/common';
import { CreateTabTiposMovimentacaoDto } from './dto/create-tab_tipos_movimentacao.dto';
import { UpdateTabTiposMovimentacaoDto } from './dto/update-tab_tipos_movimentacao.dto';

@Injectable()
export class TabTiposMovimentacaoService {
  create(createTabTiposMovimentacaoDto: CreateTabTiposMovimentacaoDto) {
    return 'This action adds a new tabTiposMovimentacao';
  }

  findAll() {
    return `This action returns all tabTiposMovimentacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabTiposMovimentacao`;
  }

  update(id: number, updateTabTiposMovimentacaoDto: UpdateTabTiposMovimentacaoDto) {
    return `This action updates a #${id} tabTiposMovimentacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabTiposMovimentacao`;
  }
}
