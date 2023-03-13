import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrbScheduler } from './service/orbcommScheduler.service';
import { OrbDataApi } from './service/orbcommDataApi.service';
import { ApiBody, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrbAuthApi } from './service/orbcommAuthApi.service';
import { OrbAdminApi } from './service/orbcommAdminApi.service';
import { OrbComApi } from './service/orbcommComApi.service';
import { object } from 'joi';

@ApiTags('Orbcomm All API')
@Controller('orb')
export class OrbcommController {
  constructor(
    /*Orbcomm Scheduler API*/
    private readonly orbScheduler: OrbScheduler,
    /*Orbcomm Authentication API*/
    private readonly orbAuthApi: OrbAuthApi,
    /*Orbcomm Data API*/
    private readonly orbDataApi: OrbDataApi,
    /*Orbcomm Administration API*/
    private readonly orbAdminApi: OrbAdminApi,
    /*Orbcomm Commands API*/
    private readonly orbComApi: OrbComApi,
  ) {}
  /*TestCode*/
  @Post('test')
  @ApiBody({ type: Object })
  async test(@Body() test: any) {
    const resultDate = await this.orbDataApi.testApi(test);
    console.log(resultDate);
    return resultDate;
  }
  @Post('callAsset')
  @ApiBody({ type: Object })
  async getAssetStatus(@Body() bodyData: any) {
    const resultDate = await this.orbDataApi.callAssetStatus(bodyData);
    console.log(resultDate);
    return resultDate;
  }
  /*Authentication API*/
  @ApiTags('Authentication API')
  @Post('auth/accessToken')
  @ApiOperation({ summary: '인증 토큰 받아오기 | 구현', description: '구현' })
  @ApiBody({
    type: Object,
    examples: { 서식: { value: { password: '비밀번호', userName: '유저이름' } }, 예제: { value: { password: 'Spaceport123!', userName: 'jhim' } } },
  })
  async getAccessToken(@Body() userInfo: any) {
    return await this.orbAuthApi.getAccessToken(userInfo);
  }
  @ApiTags('Authentication API')
  @Post('auth/refreshToken')
  @ApiOperation({ summary: '인증 토큰 초기화 | 미구현', description: '미구현' })
  @ApiBody({ type: Object })
  async refreshToken(@Body() tokenInfo: any) {
    console.log(tokenInfo);
  }
  @ApiTags('Authentication API')
  @Post('auth/resetPassword')
  @ApiOperation({ summary: '비밀번호 초기화 | 미구현', description: '미구현' })
  @ApiBody({ type: Object })
  async resetPassword(@Body() passInfo: any) {
    console.log(passInfo);
  }

  /*Data API*/
  @ApiTags('Data API')
  @Post('data/accessStatus')
  @ApiOperation({ summary: '에셋별 상태 가져오기 | 구현', description: '구현 | fromDate와 toDate는 24시간 안으로 설정해야함' })
  @ApiBody({
    type: Object,
    examples: {
      서식: { value: { assetNames: ['에셋이름1', '에셋이름2'], fromDate: '시작일', toDate: '검색종료일' } },
      예제: { value: { assetNames: ['Test 1', 'Test 2'], fromDate: '2023-03-07T00:00:00.000+00:00', toDate: '2023-03-07T23:59:59.000+00:00' } },
    },
  })
  async getAccessStatus(@Body() bodyData: any) {
    return await this.orbDataApi.getAccessStatus(bodyData);
  }
  @ApiTags('Data API')
  @Post('data/locationStatus')
  @ApiBody({ type: Object })
  async getLocationStatus(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Data API')
  @Post('data/reeferHistory')
  @ApiBody({ type: Object })
  async getReeferHistory(@Body() bodyData: any) {
    console.log(bodyData);
  }
  /*Administration API*/
  @ApiTags('Administration API')
  @Post('admin/account/createOriginUnit')
  @ApiBody({ type: object })
  async createOrganizationUnits(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Administration API')
  @Post('admin/assets/installDeviceOnAsset')
  @ApiBody({ type: Object })
  async installDeviceOnAsset(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Administration API')
  @Post('admin/assets/assignAssetsToOragaizationUnits')
  @ApiBody({ type: Object })
  async assignAssetsToOragaizationUnits(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Administration API')
  @Post('admin/assets/removeAssetsFromOrganizationUnit')
  @ApiBody({ type: Object })
  async removceAssetsFromOrganizationUnits(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Administration API')
  @Get('admin/users/accountUsers')
  async getAccountUsers() {
    console.log();
  }
  @ApiTags('Administration API')
  @Get('admin/geofences/geofences')
  async getGefences() {
    console.log();
  }
  /*Commands API*/
  @ApiTags('Commands API')
  @Post('command/reeferCommand/submitReeferCommand')
  @ApiBody({ type: Object })
  async submitReeferCommand(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Commands API')
  @Post('command/reeferCommand/submitAssetCommand')
  @ApiBody({ type: Object })
  async submitAssetCommand(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Commands API')
  @Post('command/pollCommand/submitAssetPollCommand')
  @ApiBody({ type: Object })
  async submitAssetPollCommand(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Commands API')
  @Post('command/pollCommand/submitReeferPollCommand')
  @ApiBody({ type: Object })
  async submitReeferPollCommand(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Commands API')
  @Post('command/restartCommand/submitAssestRestartCommand')
  @ApiBody({ type: Object })
  async submitAssestRestartCommand(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Commands API')
  @Post('command/restartCommand/submitReeferRestartCommand')
  @ApiBody({ type: Object })
  async submitReeferRestartCommand(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Commands API')
  @Post('command/getCommandHistory')
  @ApiBody({ type: Object })
  async getCommandHistory(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Commands API')
  @Post('command/getCommandSchedule')
  @ApiBody({ type: Object })
  async getCommandSchedule(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Commands API')
  @Post('command/cancelCommandSchedule')
  @ApiBody({ type: Object })
  async cancelCommandSchedule(@Body() bodyData: any) {
    console.log(bodyData);
  }
  @ApiTags('Commands API')
  @Post('command/assignDeivceProfile')
  @ApiBody({ type: Object })
  async assignDeviceProfile(@Body() bodyData: any) {
    console.log(bodyData);
  }
}
