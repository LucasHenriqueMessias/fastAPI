import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';
import { join } from 'path';
import { LoginModule } from './login/login.module';
import { TabLojaModule } from './tab_loja/tab_loja.module';
import { TabTiposMovimentacaoModule } from './tab_tipos_movimentacao/tab_tipos_movimentacao.module';
import { TabFluxoCaixaModule } from './tab_fluxo_caixa/tab_fluxo_caixa.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        //do not use in production
        synchronize: true,
      }),
    }),
    LoginModule,
    TabLojaModule,
    TabTiposMovimentacaoModule,
    TabFluxoCaixaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
