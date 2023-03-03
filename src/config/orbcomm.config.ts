import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LoggerOptions } from 'typeorm';
import { User } from '../modules/users/entities/user.entity';

export default class OrbcommOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configService.get('DB_HOST') || 'localhost',
      port: configService.get('DB_PORT') || 5432,
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities: [User],
      synchronize: configService.get<boolean>('TYPEORM_SYNCHRONIZE') || false,
      logging: configService.get<LoggerOptions>('TYPEORM_LOGGING') || false,
    };
  }
}
export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => OrbcommOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
