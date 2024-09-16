import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabUpload } from './entities/tab_upload.entity';
import { CreateTabUploadDto } from './dto/create-tab_upload.dto';
import { UpdateTabUploadDto } from './dto/update-tab_upload.dto';

@Injectable()
export class TabUploadService {
  constructor(
    @InjectRepository(TabUpload)
    private tabUploadRepository: Repository<TabUpload>,
  ) {}

  async create(createTabUploadDto: CreateTabUploadDto): Promise<TabUpload> {
    const tabUpload = this.tabUploadRepository.create(createTabUploadDto);
    return this.tabUploadRepository.save(tabUpload);
  }

  async findAll(): Promise<TabUpload[]> {
    return this.tabUploadRepository.find();
  }

  async findOne(id: number): Promise<TabUpload> {
    const tabUpload = await this.tabUploadRepository.findOne({ where: { id } });
    if (!tabUpload) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return tabUpload;
  }

  async update(id: number, updateTabUploadDto: UpdateTabUploadDto): Promise<TabUpload> {
    await this.tabUploadRepository.update(id, updateTabUploadDto);
    const updatedTabUpload = await this.tabUploadRepository.findOne({ where: { id } });
    if (!updatedTabUpload) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return updatedTabUpload;
  }

  async remove(id: number): Promise<void> {
    const result = await this.tabUploadRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
  }

  async saveFile(file: Express.Multer.File, createTabUploadDto: CreateTabUploadDto): Promise<TabUpload> {
    const tabUpload = this.tabUploadRepository.create({
      ...createTabUploadDto,
      pdfPath: file.path, // Salva o caminho do arquivo PDF
    });
    return this.tabUploadRepository.save(tabUpload);
  }
}