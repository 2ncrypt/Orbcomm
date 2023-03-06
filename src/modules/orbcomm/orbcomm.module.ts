import { Module } from '@nestjs/common';
import { OrbcommService } from './orbcomm.service';
import { OrbcommController } from './orbcomm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orbcomm, OrbcommAsset } from './entities/orbcomm.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forFeature([Orbcomm, OrbcommAsset]), ScheduleModule.forRoot()],
  controllers: [OrbcommController],
  providers: [OrbcommService],
  exports: [OrbcommService],
})
export class OrbcommModule {}
