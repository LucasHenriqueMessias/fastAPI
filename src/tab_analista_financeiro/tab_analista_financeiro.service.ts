import { Injectable } from '@nestjs/common';
import { CreateTabAnalistaFinanceiroDto } from './dto/create-tab_analista_financeiro.dto';
import { UpdateTabAnalistaFinanceiroDto } from './dto/update-tab_analista_financeiro.dto';

@Injectable()
export class TabAnalistaFinanceiroService {
  create(createTabAnalistaFinanceiroDto: CreateTabAnalistaFinanceiroDto) {
    return 'This action adds a new tabAnalistaFinanceiro';
  }

  findAll() {
    return `This action returns all tabAnalistaFinanceiro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabAnalistaFinanceiro`;
  }

  update(id: number, updateTabAnalistaFinanceiroDto: UpdateTabAnalistaFinanceiroDto) {
    return `This action updates a #${id} tabAnalistaFinanceiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabAnalistaFinanceiro`;
  }
}
