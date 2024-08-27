import { Injectable } from '@nestjs/common';
import { CreateTabProspeccaoDto } from './dto/create-tab_prospeccao.dto';
import { UpdateTabProspeccaoDto } from './dto/update-tab_prospeccao.dto';

@Injectable()
export class TabProspeccaoService {
  create(createTabProspeccaoDto: CreateTabProspeccaoDto) {
    return 'This action adds a new tabProspeccao';
  }

  findAll() {
    return `This action returns all tabProspeccao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabProspeccao`;
  }

  update(id: number, updateTabProspeccaoDto: UpdateTabProspeccaoDto) {
    return `This action updates a #${id} tabProspeccao`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabProspeccao`;
  }
}
