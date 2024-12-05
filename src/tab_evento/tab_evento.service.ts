import { Injectable } from '@nestjs/common';
import { CreateTabEventoDto } from './dto/create-tab_evento.dto';
import { UpdateTabEventoDto } from './dto/update-tab_evento.dto';

@Injectable()
export class TabEventoService {
  create(createTabEventoDto: CreateTabEventoDto) {
    return 'This action adds a new tabEvento';
  }

  findAll() {
    return `This action returns all tabEvento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabEvento`;
  }

  update(id: number, updateTabEventoDto: UpdateTabEventoDto) {
    return `This action updates a #${id} tabEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabEvento`;
  }
}
