import { Injectable } from '@nestjs/common';
import process from 'process';

@Injectable()
export class OrbAdminApi {
  private readonly authorizationKey: string = process.env.ORBCOMM_ACCESSTOKEN;
  private readonly defaultApiUrl: string = 'https://platform.orbcomm.com/SynB2BGatewayService/api';
  constructor() {}
}
