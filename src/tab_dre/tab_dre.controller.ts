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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabDreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabDreDto: UpdateTabDreDto) {
    return this.tabDreService.update(+id, updateTabDreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabDreService.remove(+id);
  }
}
