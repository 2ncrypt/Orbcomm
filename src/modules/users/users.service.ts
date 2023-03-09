import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cron } from '@nestjs/schedule';

// controller에서 요청된 데이터를 가공하여 DTO를 통해 디비에 접근하여 CRUD를 실행
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }
  async getOne(id: number): Promise<Users> {
    const users = await this.usersRepository.find();
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async deleteOne(id: number): Promise<boolean> {
    const user = await this.getOne(id);
    await this.usersRepository.remove(user);
    return true;
  }

  async create(userData: CreateUserDto) {
    console.log('userData ', userData, 'CreateUser', CreateUserDto);
    const user = this.usersRepository.create(userData);
    await this.usersRepository.save(user);
    console.log('success');
  }

  async update(id: number, updateData: UpdateUserDto) {
    const user = this.getOne(id);
    await this.deleteOne(id);
    await this.usersRepository.save({ ...user, ...updateData });
  }

  //Users Scheduler Test
  // @Cron('*/30 * * * * *') // 매 초마다 실행
  // async handleCron() {
  //   const users = await this.usersRepository.find({ select: ['username'] });
  //   const testUserNumber = await this.getOne(6);
  //   console.log('UserName Scheduler', users, testUserNumber);
  //   console.log(`Current time is ${new Date().toLocaleTimeString()}`);
  // }
}
