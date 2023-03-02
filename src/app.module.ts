import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validation } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : process.env.NODE_ENV === 'development'
          ? '.development.env'
          : '.development.env',
      isGlobal: true,
      validationSchema: validation,
    }),
  ],
})
export class AppModule {}
