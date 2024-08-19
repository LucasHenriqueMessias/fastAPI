import { Injectable } from '@nestjs/common';
import { CreateTabDreDto } from './dto/create-tab_dre.dto';
import { UpdateTabDreDto } from './dto/update-tab_dre.dto';

@Injectable()
export class TabDreService {
  create(createTabDreDto: CreateTabDreDto) {
    return 'This action adds a new tabDre';
  }

  findAll() {
    return `This action returns all tabDre`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabDre`;
  }

  update(id: number, updateTabDreDto: UpdateTabDreDto) {
    return `This action updates a #${id} tabDre`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabDre`;
  }
}
