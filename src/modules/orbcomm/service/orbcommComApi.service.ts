import { Injectable } from '@nestjs/common';
import process from 'process';

@Injectable()
export class OrbComApi {
  private readonly authorizationKey: string = process.env.ORBCOMM_ACCESSTOKEN;
  private readonly defaultApiUrl: string = 'https://platform.orbcomm.com/SynB2BGatewayService/api';
  constructor() {}

  async getAccessToken() {
    try {
    } catch (error) {
      console.debug('ERROR : ', error);
    }
  }
  async refreshToken() {
    try {
    } catch (error) {
      console.debug('ERROR : ', error);
    }
  }
  async resetPassword() {
    try {
    } catch (error) {
      console.debug('ERROR : ', error);
    }
  }
}
