import { TestBed } from '@angular/core/testing';

import { TemplateContractService } from './template-contract.service';

describe('TemplateContractService', () => {
  let service: TemplateContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
