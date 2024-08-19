import { Injectable } from '@nestjs/common';
import { CreateTabConsultorFinanceiroDto } from './dto/create-tab_consultor_financeiro.dto';
import { UpdateTabConsultorFinanceiroDto } from './dto/update-tab_consultor_financeiro.dto';

@Injectable()
export class TabConsultorFinanceiroService {
  create(createTabConsultorFinanceiroDto: CreateTabConsultorFinanceiroDto) {
    return 'This action adds a new tabConsultorFinanceiro';
  }

  findAll() {
    return `This action returns all tabConsultorFinanceiro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabConsultorFinanceiro`;
  }

  update(id: number, updateTabConsultorFinanceiroDto: UpdateTabConsultorFinanceiroDto) {
    return `This action updates a #${id} tabConsultorFinanceiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabConsultorFinanceiro`;
  }
}
