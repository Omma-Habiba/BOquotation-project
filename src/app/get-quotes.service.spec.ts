import { TestBed } from '@angular/core/testing';

import { GetQuotesService } from './get-quotes.service';

describe('GetQuotesService', () => {
  let service: GetQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
