import { TestBed } from '@angular/core/testing';

import { TratadoService } from './tratado.service';

describe('TratadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TratadoService = TestBed.get(TratadoService);
    expect(service).toBeTruthy();
  });
});
