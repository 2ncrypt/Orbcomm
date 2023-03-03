import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './users.controller';
import { UserService } from './users.service';

describe('UsersController', () => {
  let controller: UserController;
  let userService: UserService;

  // beforeEach() 함수는 각각의 테스트 케이스를 실행하기 전에 UsersController와 UsersService의 인스턴스를 생성합니
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });
  // describe() 함수에서는 findAll() 메서드에 대한 테스트 케이스를 정의하고, it() 함수에서는 해당 테스트 케이스를 작성합니다.
  // 이 테스트 케이스에서는 userService의 findAll() 메서드를 mock으로 대체하고, controller.findAll() 메서드가 기대한 값과 일치하는지 확인합니다.
});
