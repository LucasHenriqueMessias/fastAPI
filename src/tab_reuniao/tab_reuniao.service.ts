import { Injectable } from '@nestjs/common';
import { CreateTabReuniaoDto } from './dto/create-tab_reuniao.dto';
import { UpdateTabReuniaoDto } from './dto/update-tab_reuniao.dto';

@Injectable()
export class TabReuniaoService {
  create(createTabReuniaoDto: CreateTabReuniaoDto) {
    return 'This action adds a new tabReuniao';
  }

  findAll() {
    return `This action returns all tabReuniao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabReuniao`;
  }

  update(id: number, updateTabReuniaoDto: UpdateTabReuniaoDto) {
    return `This action updates a #${id} tabReuniao`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabReuniao`;
  }
}
