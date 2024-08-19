import { Injectable } from '@nestjs/common';
import { CreateTabConsultorComercialDto } from './dto/create-tab_consultor_comercial.dto';
import { UpdateTabConsultorComercialDto } from './dto/update-tab_consultor_comercial.dto';

@Injectable()
export class TabConsultorComercialService {
  create(createTabConsultorComercialDto: CreateTabConsultorComercialDto) {
    return 'This action adds a new tabConsultorComercial';
  }

  findAll() {
    return `This action returns all tabConsultorComercial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabConsultorComercial`;
  }

  update(id: number, updateTabConsultorComercialDto: UpdateTabConsultorComercialDto) {
    return `This action updates a #${id} tabConsultorComercial`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabConsultorComercial`;
  }
}
