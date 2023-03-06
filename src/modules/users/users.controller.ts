import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('v1/users')
@ApiTags('유저 테스트 API')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({ summary: '유저 정보 검색', description: '유저들을 검색한다.' })
  @ApiCreatedResponse({ description: '유저를 검색한다.', type: Users })
  async getAll(): Promise<Users[]> {
    return await this.userService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') userId: number): Promise<Users> {
    return await this.userService.getOne(userId);
  }

  @Post()
  async create(@Body() userData: CreateUserDto) {
    return await this.userService.create(userData);
  }

  @Delete('/:id')
  async remove(@Param('id') userId: number) {
    return await this.userService.deleteOne(userId);
  }

  @Patch('/:id')
  async patch(@Param('id') userId: number, @Body() updateData: UpdateUserDto) {
    return await this.userService.update(userId, updateData);
  }
}
