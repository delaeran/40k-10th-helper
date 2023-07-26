import { TestBed } from '@angular/core/testing';

import { RoundCounterService } from './round-counter.service';

describe('RoundCounterService', () => {
  let service: RoundCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoundCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
