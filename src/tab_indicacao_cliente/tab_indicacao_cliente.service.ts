import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabIndicacaoClienteDto } from './dto/create-tab_indicacao_cliente.dto';
import { UpdateTabIndicacaoClienteDto } from './dto/update-tab_indicacao_cliente.dto';
import { TabIndicacaoCliente } from './entities/tab_indicacao_cliente.entity';

@Injectable()
export class TabIndicacaoClienteService {
  constructor(
    @InjectRepository(TabIndicacaoCliente)
    private readonly tabIndicacaoClienteRepository: Repository<TabIndicacaoCliente>,
  ) {}

  async create(createTabIndicacaoClienteDto: CreateTabIndicacaoClienteDto): Promise<TabIndicacaoCliente> {
    const tabIndicacaoCliente = this.tabIndicacaoClienteRepository.create(createTabIndicacaoClienteDto);
    return await this.tabIndicacaoClienteRepository.save(tabIndicacaoCliente);
  }

  async findAll(): Promise<TabIndicacaoCliente[]> {
    return await this.tabIndicacaoClienteRepository.find();
  }

  async findOne(id: number): Promise<TabIndicacaoCliente> {
    return await this.tabIndicacaoClienteRepository.findOne({where: {id}});
  }

  async update(id: number, updateTabIndicacaoClienteDto: UpdateTabIndicacaoClienteDto): Promise<TabIndicacaoCliente> {
    await this.tabIndicacaoClienteRepository.update(id, updateTabIndicacaoClienteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tabIndicacaoClienteRepository.delete(id);
  }
}