import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/HttpExceptionFilter.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('SERVER_PORT');
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addTag('')
    // .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', name: 'JWT', description: 'Enter JWT Token', in: 'header' }, 'accesskey')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  if (configService.get('NODE_ENV') === 'development') {
    SwaggerModule.setup('/docs', app, document);
  }
  //예외처리 부분
  app.useGlobalFilters(new HttpExceptionFilter());
  /* enableCors ,useGlobalPipes 추가 할 수 있는 기능 확인 */
  app.enableCors(); //Cors 활성화
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      //이 옵션을 true 시키면 dto에 정의되지 않은 프로퍼티를 body에 넘길시 property 'xxx' should not exist라는 에러가 뜨게 됩니다
      forbidNonWhitelisted: true,
      //nest에서는 이런 불필요한 과정을 생략하기 위해 transform이라는 옵션을 만들었습니다
      transform: true,
    }),
  );
  await app.listen(PORT);
  if (configService.get('NODE_ENV') === 'development') {
    Logger.log(`Application running on port ${PORT}, http://localhost:${PORT}`);
  }
}

bootstrap();
