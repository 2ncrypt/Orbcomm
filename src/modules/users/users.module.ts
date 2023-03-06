import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

//스케쥴러 쓰고싶은 곳에 임포트 하면 됌
@Module({
  imports: [TypeOrmModule.forFeature([Users]), ScheduleModule.forRoot()],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
