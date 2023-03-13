import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import process from 'process';
import {
  OrbAssetStatus,
  OrbAssetStatusMng,
  OrbGenericSensor,
  OrbImpactStatus,
  OrbPositionStatus,
  OrbPretripStatus,
  OrbReeferStatus,
} from '../entities/orbAsset.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrbTest, TestDto } from '../entities/orbTest.entity';
import { plainToInstance } from 'class-transformer';
import { fn_ConvertData } from '../../../common/utils/utils';

@Injectable()
export class OrbDataApi {
  private readonly authorizationKey: string = process.env.ORBCOMM_ACCESSTOKEN;
  private readonly defaultApiUrl: string = 'https://platform.orbcomm.com/SynB2BGatewayService/api';

  constructor(
    private readonly configService: ConfigService,
    //OrbAssetEntity
    @InjectRepository(OrbAssetStatusMng) //Create시작점
    private readonly orbAssetCreateDtoRepository: Repository<OrbAssetStatusMng>,
    @InjectRepository(OrbAssetStatus)
    private readonly orbAssetStatusRepository: Repository<OrbAssetStatus>,
    @InjectRepository(OrbPositionStatus)
    private readonly orbPositionStatusRepository: Repository<OrbPositionStatus>,
    @InjectRepository(OrbReeferStatus)
    private readonly orbReeferStatusRepository: Repository<OrbReeferStatus>,
    @InjectRepository(OrbGenericSensor)
    private readonly orbGenericSensorRepository: Repository<OrbGenericSensor>,
    @InjectRepository(OrbPretripStatus)
    private readonly orbPretripStatusRepository: Repository<OrbPretripStatus>,
    @InjectRepository(OrbImpactStatus)
    private readonly orbImpactStatusRepository: Repository<OrbImpactStatus>,
    //테스트코드
    @InjectRepository(OrbTest)
    private readonly orbTestRepository: Repository<OrbTest>,
    @InjectRepository(TestDto)
    private readonly orbTestDtoRepository: Repository<TestDto>,
  ) {}

  async getAccessStatus(bodyData) {
    try {
      const url = this.defaultApiUrl + '/getAssetStatus';
      const headers = { Authorization: this.authorizationKey };
      const data = bodyData;
      const response = await axios.post(url, data, { headers });
      if (response.status === 200) {
        for (let i = 0; i < response.data.data.length; i++) {
          const allMessageId = response.data.data[i].messageId;
          const accessStatusMng = plainToInstance(OrbAssetStatusMng, response.data.data[i]);
          const accessStatus = plainToInstance(OrbAssetStatus, response.data.data[i].assetStatus);
          const positionStatus = plainToInstance(OrbPositionStatus, response.data.data[i].positionStatus);
          const reeferStatus = plainToInstance(OrbReeferStatus, response.data.data[i].reeferStatus);
          const genericSensor = plainToInstance(OrbGenericSensor, response.data.data[i].genericSensors);
          const pretiripStatus = plainToInstance(OrbPretripStatus, response.data.data[i].pretripStatus);
          const impactStatus = plainToInstance(OrbImpactStatus, response.data.data[i].impactStatus);

          for (const obj of [accessStatus, positionStatus, reeferStatus, genericSensor, pretiripStatus, impactStatus]) {
            obj.messageId = allMessageId;
          }
          await this.orbAssetCreateDtoRepository.save(accessStatusMng);
          await this.orbAssetStatusRepository.save(accessStatus);
          await this.orbPositionStatusRepository.save(positionStatus);
          await this.orbReeferStatusRepository.save(reeferStatus);
          await this.orbGenericSensorRepository.save(genericSensor);
          await this.orbPretripStatusRepository.save(pretiripStatus);
          await this.orbImpactStatusRepository.save(impactStatus);
        }
        return console.debug('RESPONSE_STATUS :', response.status, 'RESPONSE_MASSGE :', response.data.message, '\n');
      }
      return console.debug('RESPONSE_STATUS :', response.status, 'RESPONSE_MASSGE :', response.data.message, '\n');
    } catch (error) {
      return console.debug('ERROR_STATUS :', error.response.status, 'ERROR_MESSAGE :', error.response.data.message);
    }
  }

  async testApi(orbTest: any) {
    try {
      if (orbTest.fromDate || orbTest.toDate) {
        return fn_ConvertData(orbTest, 'kao');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async callAssetStatus(bodyData: any): Promise<any> {
    const result = {
      // data: null,
      // assetStatus: null,
      // positionStatus: null,
      // reeferStatus: null,
      // genericSensors: null,
      // pretripStatus: null,
      // impactStatus: null,
    };
    const searchList = [
      this.orbAssetCreateDtoRepository,
      this.orbAssetStatusRepository,
      this.orbPositionStatusRepository,
      this.orbReeferStatusRepository,
      this.orbGenericSensorRepository,
      this.orbPretripStatusRepository,
      this.orbImpactStatusRepository,
    ];
    try {
      for (const [i, obj] of searchList.entries()) {
        console.log(obj.target);
        result[i] = await obj.find();
        result[i].messageId;

        result[i] = result[i].find((obj) => obj.messageId === bodyData.messageId);
        console.log(obj);
      }

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
