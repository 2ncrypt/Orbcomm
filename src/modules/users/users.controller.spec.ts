import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let userService: UsersService;

  // beforeEach() 함수는 각각의 테스트 케이스를 실행하기 전에 UsersController와 UsersService의 인스턴스를 생성합니
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
  });
  // describe() 함수에서는 findAll() 메서드에 대한 테스트 케이스를 정의하고, it() 함수에서는 해당 테스트 케이스를 작성합니다.
  // 이 테스트 케이스에서는 userService의 findAll() 메서드를 mock으로 대체하고, controller.findAll() 메서드가 기대한 값과 일치하는지 확인합니다.
});
