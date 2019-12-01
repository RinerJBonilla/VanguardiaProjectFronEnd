import { TestBed } from '@angular/core/testing';

import { PropetarioService } from './propetario.service';

describe('PropetarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropetarioService = TestBed.get(PropetarioService);
    expect(service).toBeTruthy();
  });
});
