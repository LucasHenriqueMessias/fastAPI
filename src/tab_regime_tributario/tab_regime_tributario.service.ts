import { Injectable } from '@nestjs/common';
import { CreateTabRegimeTributarioDto } from './dto/create-tab_regime_tributario.dto';
import { UpdateTabRegimeTributarioDto } from './dto/update-tab_regime_tributario.dto';

@Injectable()
export class TabRegimeTributarioService {
  create(createTabRegimeTributarioDto: CreateTabRegimeTributarioDto) {
    return 'This action adds a new tabRegimeTributario';
  }

  findAll() {
    return `This action returns all tabRegimeTributario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabRegimeTributario`;
  }

  update(id: number, updateTabRegimeTributarioDto: UpdateTabRegimeTributarioDto) {
    return `This action updates a #${id} tabRegimeTributario`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabRegimeTributario`;
  }
}
