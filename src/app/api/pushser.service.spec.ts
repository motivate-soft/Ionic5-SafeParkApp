import { TestBed } from '@angular/core/testing';

import { PushserService } from './pushser.service';

describe('PushserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushserService = TestBed.get(PushserService);
    expect(service).toBeTruthy();
  });
});
