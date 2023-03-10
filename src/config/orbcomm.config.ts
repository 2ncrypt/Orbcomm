import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LoggerOptions } from 'typeorm';
import { Users } from '../modules/users/entities/users.entity';
import {
  OrbAsset,
  OrbAssetStatus,
  OrbGenericSensor,
  OrbImpactStatus,
  OrbPositionStatus,
  OrbPretripStatus,
  OrbReeferStatus,
} from '../modules/orbcomm/entities/orbAsset.entity';
import { OrbTest } from '../modules/orbcomm/entities/orbTest.entity';
import { TestDto } from '../modules/orbcomm/entities/orbTest.entity';
import { orbAuthToken } from '../modules/orbcomm/entities/orbAuth.entity';

export default class OrbcommOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configService.get('DB_HOST') || 'localhost',
      port: configService.get('DB_PORT') || 5432,
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities: [
        Users,
        OrbAsset,
        OrbAssetStatus,
        OrbPositionStatus,
        OrbReeferStatus,
        OrbGenericSensor,
        OrbPretripStatus,
        OrbImpactStatus,
        OrbTest,
        TestDto,
        orbAuthToken,
      ],
      synchronize: configService.get<boolean>('TYPEORM_SYNCHRONIZE') || false,
      logging: true,
    };
  }
}
export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => OrbcommOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
