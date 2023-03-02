import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/HttpExceptionFilter.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('SERVER_PORT');

  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors(); //Cors 활성화
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(PORT);
  if (configService.get('NODE_ENV') === 'development') {
    Logger.log(`Application running on port ${PORT}, http://localhost:${PORT}`);
  }
}

bootstrap();
