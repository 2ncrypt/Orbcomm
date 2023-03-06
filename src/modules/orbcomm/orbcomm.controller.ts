import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrbcommService } from './orbcomm.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrbcommAsset } from './entities/orbcomm.entity';

@Controller('orbcomm/basic')
@ApiTags('Orbcomm API')
export class OrbcommController {
  constructor(private readonly orbcommService: OrbcommService) {}

  @Get('/assetName')
  @ApiOperation({ summary: 'AssetName 검색', description: 'AssetName 검색' })
  @ApiCreatedResponse({ description: 'AssetName을 검색한다.', type: OrbcommAsset })
  getAssetName() {
    return this.orbcommService.getAssetName();
  }
  @Get('/authorizationKey')
  @ApiOperation({ summary: 'AuthorizationKey 검색', description: 'AuthorizationKey 검색' })
  @ApiCreatedResponse({ description: 'AssetName을 검색한다.', type: OrbcommAsset })
  getAuthorizationKey() {
    return this.orbcommService.getAuthorizationKey();
  }
}
