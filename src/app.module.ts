import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validation } from './utils';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/orbcomm.config';
import { OrbcommModule } from './modules/orbcomm/orbcomm.module';
import * as process from 'process';

const envFile =
  process.env.NODE_ENV === 'production' ? '.production.env' : process.env.NODE_ENV === 'development' ? '.development.env' : '.development.env';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFile,
      isGlobal: true,
      validationSchema: validation,
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    //Modules Folder in users.moudule.ts import 해야 users 사용가능
    //Modules import 자리 ,
    UsersModule,
    OrbcommModule,
  ],
  providers: [AppService],
})
export class AppModule {}
