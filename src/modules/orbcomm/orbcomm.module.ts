import { Module } from '@nestjs/common';
import { OrbcommScheduler } from './orbcomm.service';
import { OrbcommController } from './orbcomm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  OrbAsset,
  OrbAssetStatus,
  OrbGenericSensor,
  OrbImpactStatus,
  OrbPositionStatus,
  OrbPretripStatus,
  OrbReeferStatus,
} from './entities/orbAsset.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { OrbcommAPI } from './orbcommAPI.service';
import { OrbTest, TestDto } from './entities/orbTest.entity';

@Module({
  //AxiosModule = httpmodule
  imports: [
    TypeOrmModule.forFeature([
      OrbAsset,
      OrbAssetStatus,
      OrbPositionStatus,
      OrbReeferStatus,
      OrbGenericSensor,
      OrbPretripStatus,
      OrbImpactStatus,
      OrbTest,
      TestDto,
    ]),
    ScheduleModule.forRoot(),
    HttpModule,
  ],
  controllers: [OrbcommController],
  providers: [OrbcommScheduler, OrbcommAPI],
  exports: [OrbcommScheduler, OrbcommAPI],
})
export class OrbcommModule {}
