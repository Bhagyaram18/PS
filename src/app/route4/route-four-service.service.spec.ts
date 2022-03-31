import { TestBed } from '@angular/core/testing';

import { RouteFourServiceService } from './route-four-service.service';

describe('RouteFourServiceService', () => {
  let service: RouteFourServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteFourServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
