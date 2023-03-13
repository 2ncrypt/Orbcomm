import { Module } from '@nestjs/common';
import { OrbScheduler } from './service/orbcommScheduler.service';
import { OrbcommController } from './orbcomm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  OrbAssetStatusMng,
  OrbAssetStatus,
  OrbGenericSensor,
  OrbImpactStatus,
  OrbPositionStatus,
  OrbPretripStatus,
  OrbReeferStatus,
} from './entities/orbAsset.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { OrbDataApi } from './service/orbcommDataApi.service';
import { OrbTest, TestDto } from './entities/orbTest.entity';
import { OrbAuthApi } from './service/orbcommAuthApi.service';
import { OrbAdminApi } from './service/orbcommAdminApi.service';
import { OrbComApi } from './service/orbcommComApi.service';
import { orbAuthToken } from './entities/orbAuth.entity';

@Module({
  //AxiosModule = httpmodule
  imports: [
    TypeOrmModule.forFeature([
      OrbAssetStatusMng,
      OrbAssetStatus,
      OrbPositionStatus,
      OrbReeferStatus,
      OrbGenericSensor,
      OrbPretripStatus,
      OrbImpactStatus,
      OrbTest,
      TestDto,
      orbAuthToken,
    ]),
    ScheduleModule.forRoot(),
    HttpModule,
  ],
  controllers: [OrbcommController],
  providers: [OrbScheduler, OrbAuthApi, OrbDataApi, OrbAdminApi, OrbComApi],
  exports: [OrbScheduler, OrbAuthApi, OrbDataApi, OrbAdminApi, OrbComApi],
})
export class OrbcommModule {}
