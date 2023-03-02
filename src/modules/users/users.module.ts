import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';

//User폴더 내에 있는  resource들을 이용하기 위한 중심부
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
