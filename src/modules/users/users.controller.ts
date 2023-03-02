import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): User[] {
    return this.userService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') userId: number): User {
    return this.userService.getOne(userId);
  }

  @Post()
  create(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Delete('/:id')
  remove(@Param('id') userId: number) {
    return this.userService.deleteOne(userId);
  }

  // @Patch('/:id')
  // patch(@Param('id') userId: number, @Body() updateData: UpdateUserDto) {
  //   return this.userService.update(userId, updateData);
  // }
}
