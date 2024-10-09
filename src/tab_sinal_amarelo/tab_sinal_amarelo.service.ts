import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabSinalAmareloDto } from './dto/create-tab_sinal_amarelo.dto';
import { UpdateTabSinalAmareloDto } from './dto/update-tab_sinal_amarelo.dto';
import { TabSinalAmarelo } from './entities/tab_sinal_amarelo.entity';

@Injectable()
export class TabSinalAmareloService {
  constructor(
    @InjectRepository(TabSinalAmarelo)
    private readonly tabSinalAmareloRepository: Repository<TabSinalAmarelo>,
  ) {}

  async create(createTabSinalAmareloDto: CreateTabSinalAmareloDto): Promise<TabSinalAmarelo> {
    const tabSinalAmarelo = this.tabSinalAmareloRepository.create(createTabSinalAmareloDto);
    return await this.tabSinalAmareloRepository.save(tabSinalAmarelo);
  }

  async findAll(): Promise<TabSinalAmarelo[]> {
    return await this.tabSinalAmareloRepository.find();
  }

  async findOne(id: number): Promise<TabSinalAmarelo> {
    return await this.tabSinalAmareloRepository.findOne({where: {id}});
  }

  async update(id: number, updateTabSinalAmareloDto: UpdateTabSinalAmareloDto): Promise<TabSinalAmarelo> {
    await this.tabSinalAmareloRepository.update(id, updateTabSinalAmareloDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tabSinalAmareloRepository.delete(id);
  }
}