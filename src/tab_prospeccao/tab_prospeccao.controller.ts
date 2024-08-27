import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabProspeccaoService } from './tab_prospeccao.service';
import { CreateTabProspeccaoDto } from './dto/create-tab_prospeccao.dto';
import { UpdateTabProspeccaoDto } from './dto/update-tab_prospeccao.dto';

@Controller('tab-prospeccao')
export class TabProspeccaoController {
  constructor(private readonly tabProspeccaoService: TabProspeccaoService) {}

  @Post()
  create(@Body() createTabProspeccaoDto: CreateTabProspeccaoDto) {
    return this.tabProspeccaoService.create(createTabProspeccaoDto);
  }

  @Get()
  findAll() {
    return this.tabProspeccaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabProspeccaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabProspeccaoDto: UpdateTabProspeccaoDto) {
    return this.tabProspeccaoService.update(+id, updateTabProspeccaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabProspeccaoService.remove(+id);
  }
}
