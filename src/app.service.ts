import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): { link: string; main: any } {
    return { link: '/docs', main: 'Go Swagger' };
  }
}
