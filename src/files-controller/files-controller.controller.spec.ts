import { Test, TestingModule } from '@nestjs/testing';
import { FilesControllerController } from './files-controller.controller';

describe('FilesControllerController', () => {
  let controller: FilesControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilesControllerController],
    }).compile();

    controller = module.get<FilesControllerController>(
      FilesControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
