import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validation } from './utils';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/orbcomm.config';

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
    UsersModule,
  ],
  providers: [AppService],
})
export class AppModule {}
