import { Injectable } from '@nestjs/common';
import { CreateTabSocioDto } from './dto/create-tab_socio.dto';
import { UpdateTabSocioDto } from './dto/update-tab_socio.dto';

@Injectable()
export class TabSociosService {
  create(createTabSocioDto: CreateTabSocioDto) {
    return 'This action adds a new tabSocio';
  }

  findAll() {
    return `This action returns all tabSocios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabSocio`;
  }

  update(id: number, updateTabSocioDto: UpdateTabSocioDto) {
    return `This action updates a #${id} tabSocio`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabSocio`;
  }
}
