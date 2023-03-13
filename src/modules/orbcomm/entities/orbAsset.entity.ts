import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('orbAssetStatusMng')
export class OrbAssetStatusMng {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  messageId: string;
  @Column({ nullable: true })
  cargoStatus: string | null;

  @Column({ type: 'varchar', nullable: true })
  doorStatus: string | null;
  @Column({ type: 'varchar', nullable: true })
  commandStatus: string | null;
}
@Entity('orbAssetStatus')
export class OrbAssetStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  messageId: string;
  @Column({ nullable: true })
  assetName: string;

  @Column({ nullable: true })
  assetType: string;

  @Column({ nullable: true })
  messageStamp: string;

  @Column({ nullable: true })
  messageReceivedStamp: string;

  @Column({ nullable: true })
  deviceSN: string;

  @Column({ nullable: true })
  dataSource: string;

  @Column({ nullable: true })
  productType: string;

  @Column({ nullable: true })
  batteryVoltage: boolean;

  @Column({ nullable: true })
  batteryStatus: string;

  @Column({ nullable: true })
  standByAlertText: string;

  @Column({ nullable: true })
  currentProfile: string;

  @Column({ nullable: true })
  deviceFirmware: string;

  @Column({ nullable: true })
  messageType: string;

  @Column({ nullable: true })
  eventHasCurrentGPS: boolean;

  @Column({ nullable: true })
  totalDistance: number;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  reeferPower1Desc: string;

  @Column({ nullable: true })
  remoteSwitchPosition: string;

  @Column({ nullable: true })
  powerSource: string;

  @Column({ nullable: true })
  speed: number;

  @Column({ nullable: true })
  mileage: number;

  @Column({ nullable: true })
  latestAssetNotes: string;
}

@Entity('orbPositionStatus')
export class OrbPositionStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  messageId: string;
  @Column()
  city: string;

  @Column()
  state: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  zipCode: string;

  @Column()
  country: string;

  @Column({ nullable: true })
  geofenceName: string;

  @Column({ nullable: true })
  geofenceType: string;

  @Column('json', { nullable: true })
  geofenceDetails: any;

  @Column({ type: 'float', nullable: true })
  latitude: any;

  @Column({ type: 'float', nullable: true })
  longitude: any;

  @Column()
  direction: string;

  @Column({ nullable: true })
  facilityCode: string;

  @Column({ nullable: true })
  batteryAlertText: string;

  @Column({ nullable: true })
  dwell: number;

  @Column({ nullable: true })
  dwellTimeOutside: number;

  @Column({ nullable: true })
  geofenceStatus: string;

  @Column({ nullable: true })
  pmAlertText: string;

  @Column({ nullable: true })
  arrivalTime: string;

  @Column({ nullable: true })
  nearestGeofence: string;

  @Column({ nullable: true })
  tripDistance: number;

  @Column({ nullable: true })
  pmHours: number;

  @Column({ nullable: true })
  priorDepartureTime: string;

  @Column({ nullable: true })
  priorDepartureLocation: string;

  @Column({ nullable: true })
  address: string;
}

@Entity('orbReeferStatus')
export class OrbReeferStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  messageId: string;
  //
  // @Column()
  // reeferState: string;
  //
  // @Column()
  // reeferState2: string;
  //
  // @Column()
  // reeferState3: string;
  //
  // @Column()
  // hookStatus: string;
  //
  // @Column()
  // onTrip: boolean;
  //
  // @Column()
  // controllerType: string;
  //
  // @Column()
  // operationMode: string;
  //
  // @Column()
  // intelliset: string;
  //
  // @Column()
  // intellisetCode: string;
  //
  // @Column()
  // optisetCode: string;
  //
  // @Column()
  // optisetDesc: string;
  //
  // @Column()
  // controlSensor: string;
  //
  // @Column()
  // fuelLevel: number;
  //
  // @Column()
  // fuelPercent: number;
  //
  // @Column()
  // fuelFlow: number;
  //
  // @Column()
  // initialFuel: number;
  //
  // @Column()
  // finalFuel: number;
  //
  // @Column()
  // engineHours: number;
  //
  // @Column()
  // switchOnHours: number;
  //
  // @Column()
  // engineRPM: number;

  @Column()
  commPlatform: string;
  //
  // @Column()
  // ftaStatusText: string;
  //
  // @Column()
  // ftaStatus2Text: string;
  //
  // @Column()
  // ftaStatus3Text: string;
  //
  // @Column()
  // fsmaDocCount: number;
  //
  // @Column()
  // fuelAlertText: string;
  //
  // @Column()
  // microComm: string;
  //
  // @Column()
  // activeAlarms: string;
  //
  // @Column()
  // standByHours: number;
  //
  // @Column()
  // ambientTemp: number;
  //
  // @Column()
  // reeferPowerDesc: string;
  //
  // @Column()
  // setpointTemp: number;
  //
  // @Column()
  // returnTemp: number;
  //
  // @Column()
  // dischargeTemp: number;
  //
  // @Column()
  // reeferPower2Desc: string;
  //
  // @Column()
  // setpointTemp2: number;
  //
  // @Column()
  // returnTemp2: number;
  //
  // @Column()
  // dischargeTemp2: number;
  //
  // @Column()
  // reeferPower3Desc: string;
  //
  // @Column()
  // setpointTemp3: number;
  //
  // @Column()
  // returnTemp3: number;
  //
  // @Column()
  // dischargeTemp3: number;
  //
  // @Column()
  // afaxMode: string;
  //
  // @Column()
  // coilTemp: number;
  //
  // @Column()
  // etvPosition: number;
  //
  // @Column()
  // dischargePressure: number;
  //
  // @Column()
  // suctionPressure: number;
  //
  // @Column()
  // remoteProbeTemp: number;
  //
  // @Column()
  // remoteProbe2Temp: number;
  //
  // @Column()
  // remoteProbe3Temp: number;
  //
  // @Column()
  // remoteProbe4Temp: number;
  //
  // @Column()
  // remoteProbe5Temp: number;
  //
  // @Column()
  // remoteProbe6Temp: number;
  //
  // @Column()
  // remoteProbe7Temp: number;
  //
  // @Column()
  // remoteProbe8Temp: number;
  //
  // @Column()
  // remoteProbe9Temp: number;
  //
  // @Column()
  // remoteProbe10Temp: number;
  //
  // @Column()
  // remoteProbe11Temp: number;
  //
  // @Column()
  // remoteProbe12Temp: number;
  //
  // @Column()
  // humidity: number;
  //
  // @Column()
  // eventSeverity: string;
  //
  // @Column()
  // assetBatteryVoltage: number;
  //
  // @Column()
  // calculatedEngineMinutes: number;
  // @Column({ nullable: true })
  // contentType: string;
  //
  // @Column({ nullable: true })
  // controllerOn: string;
  //
  // @Column({ nullable: true })
  // engineSize: string;
  //
  // @Column({ nullable: true })
  // interfaceType: string;
  //
  // @Column({ nullable: true })
  // reeferMicro: string;
  //
  // @Column({ nullable: true })
  // profileList: string;
  //
  // @Column({ nullable: true })
  // reeferOperatingStatus: string;
  //
  // @Column({ nullable: true })
  // reeferOperational: string;
  //
  // @Column({ nullable: true })
  // remoteSwitchOpen: string;
  //
  // @Column({ nullable: true })
  // remoteSwitch2Open: string;
  //
  // @Column({ nullable: true })
  // mileageDesc: string;
  //
  // @Column({ type: 'varchar', nullable: true })
  // cargoStatus: string | null;

  @Column()
  messageMode: string;
  //
  // @Column({ nullable: true })
  // tractorId: string;
  //
  // @Column({ nullable: true })
  // clmStatus: string;
  //
  // @Column({ nullable: true })
  // fuelDiff: string;
  //
  // @Column({ nullable: true })
  // fuelSensorType: string;
  //
  // @Column({ nullable: true })
  // microSN: string;
  //
  // @Column({ nullable: true })
  // humidityStatus: string;
  //
  // @Column({ nullable: true })
  // workOrder: string;
  //
  // @Column({ nullable: true })
  // fuelFlowError: string;
  //
  // @Column({ nullable: true })
  // pretripAlertText: string;
  //
  // @Column({ nullable: true })
  // commandStatus: string;
  //
  // @Column({ nullable: true })
  // disparityAlertText: string;
  //
  // @Column({ nullable: true })
  // dwellStartTime: string;
  //
  // @Column({ nullable: true })
  // dwellEndTime: string;
  //
  // @Column({ nullable: true })
  // detentionQualifiedTime: string;
  //
  // @Column({ nullable: true })
  // impactAlertText: string;
  //
  // @Column({ nullable: true })
  // lockDownText: string;
  //
  // @Column({ nullable: true })
  // carbAlertText: string;
  //
  // @Column({ nullable: true })
  // panicAlertText: string;
  //
  // @Column({ nullable: true })
  // tempAlert: string;
  //
  // @Column({ nullable: true })
  // temp2Alert: string;
  //
  // @Column({ nullable: true })
  // temp3Alert: string;
  //
  // @Column({ nullable: true })
  // fuelStatus: string;
  //
  // @Column({ nullable: true })
  // detentionDuration: string;
  //
  // @Column({ nullable: true })
  // doorSensorData: string;
  //
  // @Column({ nullable: true })
  // cargoSensorData: string;
  //
  // @Column({ nullable: true })
  // voltageSensorData: string;
  //
  // @Column({ nullable: true })
  // temperatureSensorData: string;
  //
  // @Column({ nullable: true })
  // pressureSensorData: string;
  //
  // @Column({ nullable: true })
  // fuelSensorData: string;
  //
  // @Column({ nullable: true })
  // humiditySensorData: string;
  //
  // @Column({ nullable: true })
  // distanceSensorData: string;
  //
  // @Column({ nullable: true })
  // counterSensorData: string;
  //
  // @Column({ nullable: true })
  // otherSensorData: string;
}

@Entity('orbGenericSensor')
export class OrbGenericSensor {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  messageId: string;

  @Column({ nullable: true })
  doorSensorData: string;

  @Column({ nullable: true })
  cargoSensorData: string;

  @Column({ nullable: true })
  temperatureSensorData: string;

  @Column({ nullable: true })
  pressureSensorData: string;

  @Column({ nullable: true })
  fuelSensorData: string;

  @Column({ nullable: true })
  humiditySensorData: string;

  @Column({ nullable: true })
  distanceSensorData: string;

  @Column({ nullable: true })
  counterSensorData: string;

  @Column({ nullable: true })
  otherSensorData: string;

  @Column({ nullable: true })
  voltageSensorDataCategory: string;

  @Column({ type: 'jsonb', nullable: true })
  voltageSensorDataSensors: object;
}

@Entity('orbPretripStatus')
export class OrbPretripStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  messageId: string;

  @Column({ nullable: true })
  pretripResult: string;

  @Column({ nullable: true })
  isLocalPretrip: boolean;

  @Column({ nullable: true })
  pretripInitiatedStamp: Date;

  @Column({ nullable: true })
  pretripCompletedStamp: Date;

  @Column({ type: 'jsonb', nullable: true })
  pretripResults: {
    testCode: string;
    testResult: string;
  }[];
}

@Entity('orbImpactStatus')
export class OrbImpactStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  messageId: string;

  @Column({ nullable: true })
  moving: string;

  @Column({ nullable: true })
  impactType: string;

  @Column('float', { nullable: true })
  xpeakG: number;

  @Column('float', { nullable: true })
  ypeakG: number;

  @Column('float', { nullable: true })
  zpeakG: number;

  @Column('float', { nullable: true })
  peakG: number;

  @Column('float', { nullable: true })
  grms: number;

  @Column('float', { nullable: true })
  deltav: number;
}
