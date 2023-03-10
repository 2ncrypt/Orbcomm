import { Injectable } from '@nestjs/common';
import { OrbDataApi } from './orbcommDataApi.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrbAsset } from '../entities/orbAsset.entity';

//TypeScript에서는 와일드카드를 이용한 파일 선택 방법은 제공하지 않음

@Injectable()
export class OrbScheduler {
  constructor(
    private readonly OrbcommAPI: OrbDataApi,
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
