import { TestBed } from '@angular/core/testing';

import { InteractionServiceService } from './interaction-service.service';

describe('InteractionServiceService', () => {
  let service: InteractionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
