import { Injectable } from '@nestjs/common';
import { CreateOrbcommDto } from './dto/create-orbcomm.dto';
import { UpdateOrbcommDto } from './dto/update-orbcomm.dto';
import * as process from 'process';
@Injectable()
export class OrbcommService {
  getAuthorizationKey() {
    const authorizationKey = process.env.ORBCOMM_ACCESSTOKEN;
    return `Orbcomm AuthorizationKey = ${authorizationKey}`;
  }
  getAssetName() {
    return `Get Asset Name List in Orbcomm`;
  }
}
