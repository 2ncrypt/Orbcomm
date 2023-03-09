import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import process from 'process';
import { OrbAsset, OrbAssetStatus } from './entities/orbAsset.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreateOrbAssetDto, OrbAssetStatusCreateDto } from './dto/orbAsset/create-orbAsset.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { OrbTest, TestDto } from './entities/orbTest.entity';
import { CreateOrbTestDto } from './dto/orbTest/create-orbTest.dto';

@Injectable()
export class OrbcommAPI {
  private readonly authorizationKey: string = process.env.ORBCOMM_ACCESSTOKEN;
  private readonly defaultApiUrl: string = 'https://platform.orbcomm.com/SynB2BGatewayService/api';

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(OrbAsset)
    private readonly orbAssetRepository: Repository<OrbAsset>,
    @InjectRepository(OrbTest)
    private readonly orbTestRepository: Repository<OrbTest>,
    @InjectRepository(TestDto)
    private readonly orbTestDtoRepository: Repository<TestDto>,
  ) {}
  async create(orbAsset: CreateOrbAssetDto) {
    console.log('orbAsset', orbAsset);
  }
  async testApi(orbTest: CreateOrbTestDto) {
    try {
      const newOrbTest = new OrbTest();
      newOrbTest.messageId = orbTest.messageId;
      newOrbTest.doorStatus = orbTest.doorStatus;
      newOrbTest.commandStatus = orbTest.commandStatus;
      const savedOrbTest = await this.orbTestRepository.save(newOrbTest);

      if (orbTest.test) {
        const newTestDto = new TestDto();
        newTestDto.test1 = orbTest.test.test1;
        newTestDto.test2 = orbTest.test.test2;
        const savedTestDto = await this.orbTestRepository.save(newTestDto);
        return { savedOrbTest, savedTestDto };
      } else {
        return { savedOrbTest };
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  getAuthorizationKey() {
    return `Orbcomm AuthorizationKey = ${this.authorizationKey}`;
  }

  getAssetName() {
    return `Get Asset Name List in Orbcomm`;
  }

  async getAssetStatus(): Promise<any> {
    const url = this.defaultApiUrl + '/getAssetStatus';
    const headers = { Authorization: this.authorizationKey };
    const data = {
      assetNames: ['Test 1', 'Test 2'],
      fromDate: '2023-03-09T00:00:00.000+00:00',
      toDate: '2023-03-09T23:59:59.000+00:00',
      watermark: null,
    };
    const response = await axios.post(url, data, { headers });
    console.log(response.data.data.map(({ assetName, latitude, longitude }) => ({ assetName, latitude, longitude })));
    return response.data;
  }

  //예제 API
  async getLocationTrackingData(): Promise<any> {
    const url = this.defaultApiUrl + '/getLocationTrackingData';
    const headers = { Authorization: this.authorizationKey };
    const data = {};
    const response = await axios.post(url, data, { headers });
    console.log(response.data.data.map(({ assetName, latitude, longitude }) => ({ assetName, latitude, longitude })));
    return response.data;
  }
}
