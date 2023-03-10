import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Optional } from '@nestjs/common';
//OrbAssetCreateDto Main Class
export class OrbAssetStatusCreateDto {
  @IsOptional()
  @IsString()
  readonly assetName: string;

  @IsOptional()
  @IsString()
  readonly assetType: string;

  @IsOptional()
  readonly messageId: string;

  @IsOptional()
  @IsDate()
  readonly messageStamp: Date;

  @IsOptional()
  @IsDate()
  readonly messageReceivedStamp: Date;

  @IsOptional()
  @IsString()
  readonly deviceSN: string;

  @IsOptional()
  @IsString()
  readonly dataSource: string;

  @IsOptional()
  @IsString()
  readonly productType: string;

  @IsOptional()
  @IsNumber()
  readonly batteryVoltage: number;

  @IsOptional()
  @IsString()
  readonly batteryStatus: string;

  @IsOptional()
  @IsString()
  readonly standByAlertText: string;

  @IsOptional()
  @IsString()
  readonly currentProfile: string;

  @IsOptional()
  @IsString()
  readonly deviceFirmware: string;

  @IsOptional()
  @IsString()
  readonly messageType: string;

  @IsOptional()
  @IsBoolean()
  readonly eventHasCurrentGPS: boolean;

  @IsOptional()
  @IsNumber()
  readonly totalDistance: number;

  @IsOptional()
  @IsString()
  readonly notes: string;

  @IsOptional()
  @IsString()
  readonly reeferPower1Desc: string;

  @IsOptional()
  @IsString()
  readonly remoteSwitchPosition: string;

  @IsOptional()
  @IsString()
  readonly powerSource: string;

  @IsOptional()
  @IsNumber()
  readonly speed: number;

  @IsOptional()
  @IsNumber()
  readonly mileage: number;

  @IsOptional()
  @IsString()
  readonly latestAssetNotes: string;
}

export class OrbPositionStatusCreateDTO {
  @IsNumber()
  readonly messageId: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly state: string;

  @IsOptional()
  @IsString()
  readonly street?: string;

  @IsOptional()
  @IsString()
  readonly zipCode?: string;

  @IsString()
  readonly country: string;

  @IsString()
  readonly geofenceName: string;

  @IsString()
  readonly geofenceType: string;

  @IsOptional()
  readonly geofenceDetails: any;

  @IsNumber()
  readonly latitude: number;

  @IsNumber()
  readonly longitude: number;

  @IsString()
  readonly direction: string;

  @IsOptional()
  @IsString()
  readonly facilityCode?: string;

  @IsOptional()
  @IsString()
  readonly batteryAlertText?: string;

  @IsNumber()
  readonly dwell: number;

  @IsOptional()
  @IsNumber()
  readonly dwellTimeOutside?: number;

  @IsString()
  readonly geofenceStatus: string;

  @IsOptional()
  @IsString()
  readonly pmAlertText?: string;

  @IsDate()
  readonly arrivalTime: Date;

  @IsOptional()
  @IsString()
  readonly nearestGeofence?: string;

  @IsOptional()
  @IsNumber()
  readonly tripDistance?: number;

  @IsOptional()
  @IsNumber()
  readonly pmHours?: number;

  @IsDate()
  readonly priorDepartureTime: Date;

  @IsString()
  readonly priorDepartureLocation: string;

  @IsString()
  readonly address: string;
}
export class OrbReeferStatusCreateDto {
  @IsOptional()
  readonly messageId: string;

  @IsString()
  readonly reeferState: string;

  @IsString()
  readonly reeferState2: string;

  @IsString()
  readonly reeferState3: string;

  @IsString()
  readonly hookStatus: string;

  @IsBoolean()
  readonly onTrip: boolean;

  @IsString()
  readonly controllerType: string;

  @IsString()
  readonly operationMode: string;

  @IsString()
  readonly intelliset: string;

  @IsString()
  readonly intellisetCode: string;

  @IsString()
  readonly optisetCode: string;

  @IsString()
  readonly optisetDesc: string;

  @IsString()
  readonly controlSensor: string;

  @IsNumber()
  readonly fuelLevel: number;

  @IsNumber()
  readonly fuelPercent: number;

  @IsNumber()
  readonly fuelFlow: number;

  @IsNumber()
  readonly initialFuel: number;

  @IsNumber()
  readonly finalFuel: number;

  @IsNumber()
  readonly engineHours: number;

  @IsNumber()
  readonly switchOnHours: number;

  @IsNumber()
  readonly engineRPM: number;

  @IsString()
  readonly commPlatform: string;

  @IsString()
  readonly ftaStatusText: string;

  @IsString()
  readonly ftaStatus2Text: string;

  @IsString()
  readonly ftaStatus3Text: string;

  @IsNumber()
  readonly fsmaDocCount: number;

  @IsString()
  readonly fuelAlertText: string;

  @IsString()
  readonly microComm: string;

  @IsString()
  readonly activeAlarms: string;

  @IsNumber()
  readonly standByHours: number;

  @IsNumber()
  readonly ambientTemp: number;

  @IsString()
  readonly reeferPowerDesc: string;

  @IsNumber()
  readonly setpointTemp: number;

  @IsNumber()
  readonly returnTemp: number;

  @IsNumber()
  readonly dischargeTemp: number;

  @IsString()
  readonly reeferPower2Desc: string;

  @IsNumber()
  readonly setpointTemp2: number;

  @IsNumber()
  readonly returnTemp2: number;

  @IsNumber()
  readonly dischargeTemp2: number;

  @IsString()
  readonly reeferPower3Desc: string;

  @IsNumber()
  readonly setpointTemp3: number;

  @IsNumber()
  readonly returnTemp3: number;

  @IsNumber()
  readonly dischargeTemp3: number;

  @IsString()
  readonly afaxMode: string;

  @IsNumber()
  readonly coilTemp: number;

  @IsNumber()
  readonly etvPosition: number;

  @IsNumber()
  readonly dischargePressure: number;

  @IsNumber()
  readonly suctionPressure: number;

  @IsNumber()
  readonly remoteProbeTemp: number;

  @IsNumber()
  readonly remoteProbe2Temp: number;

  @IsNumber()
  readonly remoteProbe3Temp: number;

  @IsNumber()
  readonly remoteProbe4Temp: number;

  @IsNumber()
  readonly remoteProbe5Temp: number;

  @IsNumber()
  readonly remoteProbe6Temp: number;
  @IsOptional()
  @IsNumber()
  readonly remoteProbe7Temp?: number;

  @IsOptional()
  @IsNumber()
  readonly remoteProbe8Temp?: number;

  @IsOptional()
  @IsNumber()
  readonly remoteProbe9Temp?: number;

  @IsOptional()
  @IsNumber()
  readonly remoteProbe10Temp?: number;

  @IsOptional()
  @IsNumber()
  readonly remoteProbe11Temp?: number;

  @IsOptional()
  @IsNumber()
  readonly remoteProbe12Temp?: number;

  @IsOptional()
  @IsNumber()
  readonly humidity?: number;

  @IsOptional()
  @IsNumber()
  readonly eventSeverity?: string;

  @IsOptional()
  @IsNumber()
  readonly assetBatteryVoltage?: number;

  @IsOptional()
  @IsNumber()
  readonly calculatedEngineMinutes?: number;

  @IsOptional()
  readonly contentType?: string;

  @IsOptional()
  @IsNumber()
  readonly controllerOn?: number;

  @IsOptional()
  @IsNumber()
  readonly engineSize?: number;

  @IsOptional()
  readonly interfaceType?: string;

  @IsOptional()
  readonly reeferMicro?: string;

  @IsOptional()
  readonly profileList?: string;

  @IsOptional()
  readonly reeferOperatingStatus?: string;

  @IsOptional()
  @IsNumber()
  readonly reeferOperational?: number;

  @IsOptional()
  @IsNumber()
  readonly remoteSwitchOpen?: number;

  @IsOptional()
  @IsNumber()
  readonly remoteSwitch2Open?: number;

  @IsOptional()
  readonly mileageDesc?: string;

  @IsString()
  @Optional()
  cargoStatus?: string;

  @IsOptional()
  readonly messageMode: string;

  @IsOptional()
  readonly tractorId?: string;

  @IsOptional()
  readonly clmStatus?: string;

  @IsOptional()
  @IsNumber()
  readonly fuelDiff?: number;

  @IsOptional()
  readonly fuelSensorType?: string;

  @IsOptional()
  readonly microSN?: string;

  @IsOptional()
  readonly humidityStatus?: string;

  @IsOptional()
  readonly workOrder?: string;

  @IsOptional()
  @IsNumber()
  readonly fuelFlowError?: number;

  @IsOptional()
  readonly pretripAlertText?: string;

  @IsString()
  @Optional()
  commandStatus?: string;

  @IsOptional()
  readonly disparityAlertText?: string;

  @IsOptional()
  readonly dwellStartTime?: string;

  @IsOptional()
  readonly dwellEndTime?: string;

  @IsOptional()
  @IsNumber()
  readonly detentionQualifiedTime?: number;

  @IsOptional()
  readonly impactAlertText?: string;

  @IsOptional()
  readonly lockDownText?: string;

  @IsOptional()
  readonly carbAlertText?: string;

  @IsOptional()
  readonly panicAlertText?: string;

  @IsOptional()
  readonly tempAlert?: string;

  @IsOptional()
  readonly temp2Alert?: string;

  @IsOptional()
  @IsNumber()
  readonly temp3Alert?: number;

  @IsOptional()
  readonly fuelStatus?: string;

  @IsOptional()
  @IsNumber()
  readonly detentionDuration?: number;

  @IsNumber()
  readonly doorSensorData: number;

  @IsNumber()
  readonly cargoSensorData: number;

  @IsNumber()
  readonly voltageSensorData: number;

  @IsNumber()
  readonly temperatureSensorData: number;

  @IsNumber()
  readonly pressureSensorData: number;

  @IsNumber()
  readonly fuelSensorData: number;

  @IsNumber()
  readonly humiditySensorData: number;

  @IsNumber()
  readonly distanceSensorData: number;

  @IsNumber()
  readonly counterSensorData: number;

  @IsNumber()
  readonly otherSensorData: number;
}
export class OrbGenericSensorCreateDto {
  @IsNumber()
  readonly messageId: string;

  @IsOptional()
  @IsString()
  readonly doorSensorData?: string;

  @IsOptional()
  @IsString()
  readonly cargoSensorData?: string;

  @IsOptional()
  @IsString()
  readonly temperatureSensorData?: string;

  @IsOptional()
  @IsString()
  readonly pressureSensorData?: string;

  @IsOptional()
  @IsString()
  readonly fuelSensorData?: string;

  @IsOptional()
  @IsString()
  readonly humiditySensorData?: string;

  @IsOptional()
  @IsString()
  readonly distanceSensorData?: string;

  @IsOptional()
  @IsString()
  readonly counterSensorData?: string;

  @IsOptional()
  @IsString()
  readonly otherSensorData?: string;

  @IsOptional()
  @IsString()
  readonly voltageSensorDataCategory?: string;

  @IsOptional()
  @IsObject()
  readonly voltageSensorDataSensors?: object;
}

export class OrbPretripStatusCreateDTO {
  @IsNumber()
  readonly messageId: string;

  @IsString()
  readonly pretripResult: string;

  @IsBoolean()
  readonly isLocalPretrip: boolean;

  @IsDate()
  readonly pretripInitiatedStamp: Date;

  @IsDate()
  readonly pretripCompletedStamp: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrbPretripResultCreateDTO)
  readonly pretripResults: OrbPretripResultCreateDTO[];
}
//OrbPretripStatusCreateDTO의 내부 클래스
export class OrbPretripResultCreateDTO {
  @IsString()
  readonly testCode: string;

  @IsString()
  readonly testResult: string;
}
export class OrbImpactStatusCreateDto {
  @IsNumber()
  readonly messageId: string;

  @IsString()
  @IsOptional()
  readonly moving: string;

  @IsString()
  @IsOptional()
  readonly impactType: string;

  @IsNumber()
  @IsOptional()
  readonly xpeakG: number;

  @IsNumber()
  @IsOptional()
  readonly ypeakG: number;

  @IsNumber()
  @IsOptional()
  readonly zpeakG: number;

  @IsNumber()
  @IsOptional()
  readonly peakG: number;

  @IsNumber()
  @IsOptional()
  readonly grms: number;

  @IsNumber()
  @IsOptional()
  readonly deltav: number;
}

export class OrbAssetCreateDto {
  @IsNotEmpty()
  @IsString()
  readonly messageId: string;

  @IsString()
  @IsOptional()
  cargoStatus?: string;

  @IsString()
  @IsOptional()
  doorStatus?: string;

  @IsString()
  @IsOptional()
  commandStatus?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => OrbAssetStatusCreateDto)
  readonly assetStatus?: OrbAssetStatusCreateDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => OrbPositionStatusCreateDTO)
  readonly positionStatus?: OrbPositionStatusCreateDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => OrbReeferStatusCreateDto)
  readonly reeferStatus?: OrbReeferStatusCreateDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => OrbGenericSensorCreateDto)
  readonly genericSensors?: OrbGenericSensorCreateDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => OrbPretripStatusCreateDTO)
  readonly pretripStatus?: OrbPretripStatusCreateDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => OrbImpactStatusCreateDto)
  readonly impactStatus?: OrbImpactStatusCreateDto;
}
