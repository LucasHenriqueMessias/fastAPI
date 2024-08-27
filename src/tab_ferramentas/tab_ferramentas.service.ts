import { Injectable } from '@nestjs/common';
import { CreateTabFerramentaDto } from './dto/create-tab_ferramenta.dto';
import { UpdateTabFerramentaDto } from './dto/update-tab_ferramenta.dto';

@Injectable()
export class TabFerramentasService {
  create(createTabFerramentaDto: CreateTabFerramentaDto) {
    return 'This action adds a new tabFerramenta';
  }

  findAll() {
    return `This action returns all tabFerramentas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabFerramenta`;
  }

  update(id: number, updateTabFerramentaDto: UpdateTabFerramentaDto) {
    return `This action updates a #${id} tabFerramenta`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabFerramenta`;
  }
}
