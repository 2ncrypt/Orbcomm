import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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
    console.log('Retest ', users);
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
    const user = this.usersRepository.create(userData);
    await this.usersRepository.save(user);
    console.log('success');
  }

  // update(id: number, updateData: UpdateUserDto) {
  //   const user = this.getOne(id);
  //   this.deleteOne(id);
  //   this.users.push({ ...user, ...updateData });
  // }
}
