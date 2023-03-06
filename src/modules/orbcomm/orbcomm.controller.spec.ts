import { Test, TestingModule } from '@nestjs/testing';
import { OrbcommController } from './orbcomm.controller';
import { OrbcommService } from './orbcomm.service';

describe('OrbcommController', () => {
  let controller: OrbcommController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrbcommController],
      providers: [OrbcommService],
    }).compile();

    controller = module.get<OrbcommController>(OrbcommController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
