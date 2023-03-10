import { Injectable } from '@nestjs/common';
import process from 'process';
import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { orbAuthToken } from '../entities/orbAuth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrbAuthApi {
  private readonly authorizationKey: string = process.env.ORBCOMM_ACCESSTOKEN;
  public readonly headers = { Authorization: this.authorizationKey };
  private readonly defaultApiUrl: string = 'https://platform.orbcomm.com/SynB2BGatewayService/api';
  constructor(
    @InjectRepository(orbAuthToken)
    private readonly token: Repository<orbAuthToken>,
  ) {}
  async getAccessToken(inputData: any) {
    try {
      const url = this.defaultApiUrl + '/generateToken';
      const headers = { Authorization: this.authorizationKey };
      const data = inputData;
      const response = await axios.post(url, data, { headers });
      if (response.status === 200) {
        const authToken = plainToInstance(orbAuthToken, response.data.data);
        const result = await this.token.save(authToken);
        return console.debug('RESPONSE_STATUS :', response.status, 'RESPONSE_MASSGE :', response.data.message, '\n', result);
      }
      return response.status;
    } catch (error) {
      return console.debug('ERROR_STATUS :', error.response.status, 'ERROR_MESSAGE :', error.response.data.message);
    }
  }
}
