import { TestBed } from '@angular/core/testing';

import { TrackipService } from './trackip.service';

describe('TrackipService', () => {
  let service: TrackipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
