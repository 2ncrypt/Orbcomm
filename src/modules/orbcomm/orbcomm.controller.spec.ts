import { Test, TestingModule } from '@nestjs/testing';
import { OrbcommController } from './orbcomm.controller';
import { OrbScheduler } from './service/orbcommScheduler.service';
import { OrbDataApi } from './service/orbcommDataApi.service';

describe('OrbcommController', () => {
  let controller: OrbcommController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrbcommController],
      providers: [OrbScheduler, OrbDataApi],
    }).compile();

    controller = module.get<OrbcommController>(OrbcommController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
