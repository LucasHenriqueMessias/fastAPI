import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabDreService } from './tab_dre.service';
import { CreateTabDreDto } from './dto/create-tab_dre.dto';
import { UpdateTabDreDto } from './dto/update-tab_dre.dto';

@Controller('tab-dre')
export class TabDreController {
  constructor(private readonly tabDreService: TabDreService) {}

  @Post()
  create(@Body() createTabDreDto: CreateTabDreDto) {
    return this.tabDreService.create(createTabDreDto);
  }

  @Get()
  findAll() {
    return this.tabDreService.findAll();
  }

  @Get(':Data/:Cliente')
  findOne(@Param('Data')Data: Date, @Param('Cliente')Cliente: string) {
    return this.tabDreService.findAllByDate(Data, Cliente);
  }

  @Patch(':Data/:Cliente/:Descricao')
  update(@Param('Data') Data: Date, @Param('Cliente')Cliente: string, @Param('Descricao')Descricao: string, updateTabDreDto: UpdateTabDreDto) {
    return this.tabDreService.update(Data, Cliente, Descricao, updateTabDreDto);
  }

  @Delete(':Data/:Cliente/:Descricao')
  remove(@Param('Data') Data: Date, @Param('Cliente')Cliente: string, @Param('Descricao')Descricao: string) {
    return this.tabDreService.remove(Data, Cliente, Descricao);
  }
}
