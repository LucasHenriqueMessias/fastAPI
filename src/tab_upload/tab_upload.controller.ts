import { Controller, Post, UploadedFile, UseInterceptors, Body, Get, Param, NotFoundException, Res, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TabUploadService } from './tab_upload.service';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { CreateTabUploadDto } from './dto/create-tab_upload.dto';
import { Response } from 'express';

@Controller('tab-upload')
export class TabUploadController {
  constructor(private readonly tabUploadService: TabUploadService) {}

  @Post('pdf')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Diretório onde os arquivos serão armazenados
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
      }
    }),
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('Only PDF files are allowed!'), false);
      }
    }
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() createTabUploadDto: CreateTabUploadDto) {
    if (!file) {
      throw new NotFoundException('File not found');
    }
    return this.tabUploadService.saveFile(file, createTabUploadDto);
  }

  @Get('pdf')
  async listFiles() {
    const files = await this.tabUploadService.findAll();
    return files.map(file => ({
      id: file.id,
      name: file.name,
      description: file.description,
      pdfPath: file.pdfPath,
    }));
  }

  @Get('pdf/:id')
  async getFile(@Param('id') id: string, @Res() res: Response) {
    const tabUpload = await this.tabUploadService.findOne(+id);
    if (!tabUpload) {
      throw new NotFoundException('File not found');
    }
    const filePath = join(process.cwd(), tabUpload.pdfPath);
    return res.sendFile(filePath);
  }

  @Delete('pdf/:id')
  async removeFile(@Param('id') id: string) {
    await this.tabUploadService.remove(+id);
    return { message: 'File removed successfully' };
  }
}