import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'uploads')); // Servir arquivos estáticos da pasta uploads
  app.enableCors(); // Habilitar CORS
  await app.listen(3000);
}
bootstrap();