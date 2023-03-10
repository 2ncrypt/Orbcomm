import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import process from 'process';
import {
  OrbAsset,
  OrbAssetStatus,
  OrbGenericSensor,
  OrbImpactStatus,
  OrbPositionStatus,
  OrbPretripStatus,
  OrbReeferStatus,
} from '../entities/orbAsset.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrbAssetCreateDto } from '../dto/orbAsset/create-orbAsset.dto';
import { OrbTest, TestDto } from '../entities/orbTest.entity';
import { CreateOrbTestDto } from '../dto/orbTest/create-orbTest.dto';
import { plainToInstance } from 'class-transformer';
import { orbAuthToken } from '../entities/orbAuth.entity';

@Injectable()
export class OrbDataApi {
  private readonly authorizationKey: string = process.env.ORBCOMM_ACCESSTOKEN;
  private readonly defaultApiUrl: string = 'https://platform.orbcomm.com/SynB2BGatewayService/api';
  private readonly testData: any = {
    messageId: '10876951937',
    assetStatus: {
      assetName: 'Test 2',
      assetType: 'Chassis',
      messageStamp: '2023-03-08T01:50:33.000Z',
      messageReceivedStamp: '2023-03-08T01:51:16.522Z',
      deviceSN: 'FSDD623010659',
      dataSource: null,
      productType: 'GT1200',
      batteryVoltage: 7.9,
      batteryStatus: 'Normal',
      standByAlertText: null,
      currentProfile: null,
      deviceFirmware: null,
      messageType: 'Heartbeat',
      eventHasCurrentGPS: null,
      totalDistance: 162,
      notes: null,
      reeferPower1Desc: null,
      remoteSwitchPosition: null,
      powerSource: 'Diesel Mode',
      speed: null,
      mileage: null,
      latestAssetNotes: null,
    },
    positionStatus: {
      city: 'NAM-GU',
      state: 'BUSAN',
      street: null,
      zipCode: null,
      country: 'KR',
      geofenceName: 'Company',
      geofenceType: 'Test1',
      geofenceDetails: [
        {
          geofenceName: 'Company',
          geofenceType: 'Test1',
          detentionQualifiedTime: null,
          detentionThreshold: null,
        },
      ],
      latitude: 35.1484898,
      longitude: 129.0660767,
      direction: 'North',
      facilityCode: null,
      batteryAlertText: null,
      dwell: 25,
      dwellTimeOutside: null,
      geofenceStatus: 'In',
      pmAlertText: null,
      arrivalTime: '2023-03-07T01:14:56.000Z',
      nearestGeofence: null,
      tripDistance: null,
      pmHours: null,
      priorDepartureTime: '2023-03-07T00:49:21.000Z',
      priorDepartureLocation: 'Start',
      address: '704-5 MUNHYEON-DONG, NAM-GU, BUSAN, SOUTH KOREA',
    },
    cargoStatus: null,
    doorStatus: null,
    commandStatus: null,
    reeferStatus: {
      reeferState: null,
      reeferState2: null,
      reeferState3: null,
      hookStatus: null,
      onTrip: null,
      controllerType: null,
      operationMode: null,
      intelliset: null,
      intellisetCode: null,
      optisetCode: null,
      optisetDesc: null,
      controlSensor: null,
      fuelLevel: null,
      fuelPercent: null,
      fuelFlow: null,
      initialFuel: null,
      finalFuel: null,
      engineHours: null,
      switchOnHours: null,
      engineRPM: null,
      commPlatform: 'GSM',
      ftaStatusText: null,
      ftaStatus2Text: null,
      ftaStatus3Text: null,
      fsmaDocCount: null,
      fuelAlertText: null,
      microComm: null,
      activeAlarms: null,
      standByHours: null,
      ambientTemp: null,
      reeferPowerDesc: null,
      setpointTemp: null,
      returnTemp: null,
      dischargeTemp: null,
      reeferPower2Desc: null,
      setpointTemp2: null,
      returnTemp2: null,
      dischargeTemp2: null,
      reeferPower3Desc: null,
      setpointTemp3: null,
      returnTemp3: null,
      dischargeTemp3: null,
      afaxMode: null,
      coilTemp: null,
      etvPosition: null,
      dischargePressure: null,
      suctionPressure: null,
      remoteProbeTemp: null,
      remoteProbe2Temp: null,
      remoteProbe3Temp: null,
      remoteProbe4Temp: null,
      remoteProbe5Temp: null,
      remoteProbe6Temp: null,
      remoteProbe7Temp: null,
      remoteProbe8Temp: null,
      remoteProbe9Temp: null,
      remoteProbe10Temp: null,
      remoteProbe11Temp: null,
      remoteProbe12Temp: null,
      humidity: null,
      eventSeverity: null,
      assetBatteryVoltage: null,
      calculatedEngineMinutes: null,
      contentType: null,
      controllerOn: null,
      engineSize: null,
      interfaceType: null,
      reeferMicro: null,
      profileList: null,
      reeferOperatingStatus: null,
      reeferOperational: null,
      remoteSwitchOpen: null,
      remoteSwitch2Open: null,
      mileageDesc: null,
      cargoStatus: null,
      messageMode: 'GSM',
      tractorId: null,
      clmStatus: null,
      fuelDiff: null,
      fuelSensorType: null,
      microSN: null,
      humidityStatus: null,
      workOrder: null,
      fuelFlowError: null,
      pretripAlertText: null,
      commandStatus: null,
      disparityAlertText: null,
      dwellStartTime: null,
      dwellEndTime: null,
      detentionQualifiedTime: null,
      impactAlertText: null,
      lockDownText: null,
      carbAlertText: null,
      panicAlertText: null,
      tempAlert: null,
      temp2Alert: null,
      temp3Alert: null,
      fuelStatus: null,
      detentionDuration: null,
      doorSensorData: null,
      cargoSensorData: null,
      voltageSensorData: null,
      temperatureSensorData: null,
      pressureSensorData: null,
      fuelSensorData: null,
      humiditySensorData: null,
      distanceSensorData: null,
      counterSensorData: null,
      otherSensorData: null,
    },
    genericSensors: {
      doorSensorData: null,
      cargoSensorData: null,
      voltageSensorData: {
        category: 'Voltage',
        sensors: [
          {
            sensorLabel: 'deviceBatteryVoltage',
            sensorDataElement: 'DEVICEBATTERYVOLTAGE',
            sensorValue: '7.9',
            sensorNumber: '352',
          },
        ],
      },
      temperatureSensorData: null,
      pressureSensorData: null,
      fuelSensorData: null,
      humiditySensorData: null,
      distanceSensorData: null,
      counterSensorData: null,
      otherSensorData: null,
    },
    pretripStatus: {
      pretripResult: null,
      isLocalPretrip: null,
      pretripInitiatedStamp: null,
      pretripCompletedStamp: null,
      pretripResults: [
        {
          testCode: 'Display Test',
          testResult: null,
        },
      ],
    },
    impactStatus: {
      moving: 'Stationary',
      impactType: null,
      xpeakG: null,
      ypeakG: null,
      zpeakG: null,
      peakG: null,
      grms: null,
      deltav: null,
    },
  };
  constructor(
    private readonly configService: ConfigService,
    //OrbAssetEntity
    @InjectRepository(OrbAsset) //Create시작점
    private readonly orbAssetCreateDtoRepository: Repository<OrbAsset>,
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
        const accessStatus = plainToInstance(OrbAsset, this.testData);
        const result = await this.orbAssetCreateDtoRepository.save(accessStatus);
        return console.debug('RESPONSE_STATUS :', response.status, 'RESPONSE_MASSGE :', response.data.message, '\n', result);
      }
    } catch (error) {
      return console.debug('ERROR_STATUS :', error.response.status, 'ERROR_MESSAGE :', error.response.data.message);
    }
  }
  async testApi(orbTest: any) {
    const newOrbTest = plainToInstance(CreateOrbTestDto, orbTest);
    const savedOrbTest = await this.orbTestRepository.save(newOrbTest);
    if (orbTest.test) {
      const newTestDto = plainToInstance(TestDto, orbTest.test);
      const savedTestDto = await this.orbTestDtoRepository.save(newTestDto);
      return { savedOrbTest, savedTestDto };
    }
    return { savedOrbTest };
  }

  getAuthorizationKey() {
    return `Orbcomm AuthorizationKey = ${this.authorizationKey}`;
  }

  getAssetName() {
    return `Get Asset Name List in Orbcomm`;
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
