import { Test, TestingModule } from '@nestjs/testing';
import { TabConsultorComercialController } from './tab_consultor_comercial.controller';
import { TabConsultorComercialService } from './tab_consultor_comercial.service';

describe('TabConsultorComercialController', () => {
  let controller: TabConsultorComercialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabConsultorComercialController],
      providers: [TabConsultorComercialService],
    }).compile();

    controller = module.get<TabConsultorComercialController>(TabConsultorComercialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
