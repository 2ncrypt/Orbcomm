import { Injectable } from '@nestjs/common';
import { CreateOrbAssetDto } from './dto/orbAsset/create-orbAsset.dto';
import { UpdateOrbAssetDto } from './dto/orbAsset/update-orbAsset.dto';
import { OrbcommAPI } from './orbcommAPI.service';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrbAsset } from './entities/orbAsset.entity';
//TypeScript에서는 와일드카드를 이용한 파일 선택 방법은 제공하지 않음

@Injectable()
export class OrbcommScheduler {
  constructor(
    private readonly OrbcommAPI: OrbcommAPI,
    @InjectRepository(OrbAsset)
    private readonly orbAssetRepository: Repository<OrbAsset>,
  ) {}

  // Scheduler 테스트
  // @Cron('0 */6 * * * *') // 6분마다 실행
  // async getLocationTrackingDataScheduler() {
  //   const test = await this.OrbcommAPI.getLocationTrackingData();
  //   console.log('getLocationTrackingDataScheduler Scheduler', test);
  //   console.log(`Current time is ${new Date().toLocaleTimeString()}`);
  // }
}
