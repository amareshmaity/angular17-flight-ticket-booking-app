import { TestBed } from '@angular/core/testing';

import { QueryFlightsService } from './query-flights.service';

describe('QueryFlightsService', () => {
  let service: QueryFlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryFlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
