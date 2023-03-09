import { Test, TestingModule } from '@nestjs/testing';
import { OrbcommController } from './orbcomm.controller';
import { OrbcommScheduler } from './orbcomm.service';
import { OrbcommAPI } from './orbcommAPI.service';

describe('OrbcommController', () => {
  let controller: OrbcommController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrbcommController],
      providers: [OrbcommScheduler, OrbcommAPI],
    }).compile();

    controller = module.get<OrbcommController>(OrbcommController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
