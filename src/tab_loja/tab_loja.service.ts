import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabLojaDto } from './dto/create-tab_loja.dto';
import { UpdateTabLojaDto } from './dto/update-tab_loja.dto';
import { TabLoja } from './entities/tab_loja.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TabLojaService {

  constructor(
    @InjectRepository(TabLoja)
    private readonly TabLojaRepository:
    Repository<TabLoja>){

    }

  async create(createTabLojaDto: CreateTabLojaDto) {
    const loja = this.TabLojaRepository.create(createTabLojaDto)
    return await this.TabLojaRepository.save(loja);
  }

  async findAll() {
    return await this.TabLojaRepository.find();
  }

  async findOne(cnpj_me: string) {
    return await this.TabLojaRepository.findOne({
      where: {cnpj_me}
    });
  }

  async update(cnpj_me: string, updateTabLojaDto: UpdateTabLojaDto) {
    const loja = await this.findOne(cnpj_me);

    if(!loja){
      throw new NotFoundException();
    }

    Object.assign(loja, updateTabLojaDto);
    
    return await this.TabLojaRepository.save(loja);

  }

   async remove(cnpj_me: string) {
    const loja = await this.findOne(cnpj_me);
    if(!loja){
     throw new NotFoundException();
    } 
 
    return await this.TabLojaRepository.remove(loja);  
  }
}
