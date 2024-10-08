import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabProspeccaoDto } from './dto/create-tab_prospeccao.dto';
import { UpdateTabProspeccaoDto } from './dto/update-tab_prospeccao.dto';
import { TabProspeccao } from './entities/tab_prospeccao.entity';

@Injectable()
export class TabProspeccaoService {
  constructor(
    @InjectRepository(TabProspeccao)
    private readonly tabProspeccaoRepository: Repository<TabProspeccao>,
  ) {}

  async create(createTabProspeccaoDto: CreateTabProspeccaoDto): Promise<TabProspeccao> {
    const tabProspeccao = this.tabProspeccaoRepository.create(createTabProspeccaoDto);
    return this.tabProspeccaoRepository.save(tabProspeccao);
  }

  async findAll(): Promise<TabProspeccao[]> {
    return this.tabProspeccaoRepository.find();
  }

  async findOne(id: number): Promise<TabProspeccao> {
    return this.tabProspeccaoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTabProspeccaoDto: UpdateTabProspeccaoDto): Promise<TabProspeccao> {
    await this.tabProspeccaoRepository.update(id, updateTabProspeccaoDto);
    return this.tabProspeccaoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.tabProspeccaoRepository.delete(id);
  }
}