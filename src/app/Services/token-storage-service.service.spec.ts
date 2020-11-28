import { TestBed } from '@angular/core/testing';

import { TokenStorageServiceService } from './token-storage-service.service';

describe('TokenStorageServiceService', () => {
  let service: TokenStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
