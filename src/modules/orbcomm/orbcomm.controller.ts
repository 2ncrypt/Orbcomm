import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrbcommScheduler } from './orbcomm.service';
import { OrbcommAPI } from './orbcommAPI.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreateOrbAssetDto } from './dto/orbAsset/create-orbAsset.dto';
import { OrbTest } from './entities/orbTest.entity';
import { CreateOrbTestDto, TestDto } from './dto/orbTest/create-orbTest.dto';
// import { OrbAssetStatus } from './entities/orbcomm.entity';

@Controller('orb')
@ApiTags('Orbcomm API')
export class OrbcommController {
  constructor(private readonly orbcommService: OrbcommScheduler, private readonly orbcommAPIService: OrbcommAPI) {}

  // @Get('/test')
  // @ApiOperation({ summary: 'Test코드 테스트', description: 'Test코드 테스트' })
  // getTestcode() {
  //   const test = this.orbcommAPIService.getTestCode();
  //   console.log(test);
  //   return test;
  // }
  @Get('/assetName')
  @ApiOperation({ summary: 'AssetName 검색', description: 'AssetName 검색' })
  // @ApiCreatedResponse({ description: 'AssetName을 검색한다.', type: OrbAssetStatus })
  getAssetName() {
    return this.orbcommAPIService.getAssetName();
  }

  @Get('/authorizationKey')
  @ApiOperation({ summary: 'AuthorizationKey 검색', description: 'AuthorizationKey 검색' })
  @ApiCreatedResponse({ description: 'AuthorizationKey을 검색한다.' })
  getAuthorizationKey() {
    return this.orbcommAPIService.getAuthorizationKey();
  }

  @Get('/locationTrackingData')
  @ApiOperation({ summary: '/getLocationTrackingData ', description: 'getLocationTrackingData에 대한 데이터' })
  @ApiCreatedResponse({ description: 'AssetName을 검색한다.' })
  async getData() {
    const response = await this.orbcommAPIService.getLocationTrackingData();
    console.log("DATA '/'DATA ", response.data); // 응답 데이터
    return response.data;
  }

  @Get('assetStatus')
  @ApiOperation({ summary: '/getAssetStatus ', description: 'getAssetStatus 대한 데이터' })
  @ApiCreatedResponse({ description: 'getAssetStatus을 검색한다.' })
  async getAssetStatus() {
    const response = await this.orbcommAPIService.getAssetStatus();
    console.log("DATA '/'DATA ", response.data); // 응답 데이터
    return response.data;
  }
  @Post()
  async create(@Body() CreateOrbAssetDto: CreateOrbAssetDto) {
    return await this.orbcommAPIService.create(CreateOrbAssetDto);
  }
  @Post('test')
  async test(@Body() CreateOrbTestDto: CreateOrbTestDto, TestDto: TestDto) {
    console.log(CreateOrbTestDto);
    return await this.orbcommAPIService.testApi(CreateOrbTestDto);
  }
}
