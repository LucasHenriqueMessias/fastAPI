import { Injectable } from '@nestjs/common';
import { CreateTabFluxoCaixaDto } from './dto/create-tab_fluxo_caixa.dto';
import { UpdateTabFluxoCaixaDto } from './dto/update-tab_fluxo_caixa.dto';

@Injectable()
export class TabFluxoCaixaService {
  create(createTabFluxoCaixaDto: CreateTabFluxoCaixaDto) {
    return 'This action adds a new tabFluxoCaixa';
  }

  findAll() {
    return `This action returns all tabFluxoCaixa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabFluxoCaixa`;
  }

  update(id: number, updateTabFluxoCaixaDto: UpdateTabFluxoCaixaDto) {
    return `This action updates a #${id} tabFluxoCaixa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabFluxoCaixa`;
  }
}
