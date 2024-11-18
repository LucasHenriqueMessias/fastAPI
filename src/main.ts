import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'uploads')); // Servir arquivos estáticos da pasta uploads
  app.enableCors(); // Habilitar CORS
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3002);
}
bootstrap();