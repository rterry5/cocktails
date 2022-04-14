import { TestBed } from '@angular/core/testing';

import { DrinksResolverService } from './drinks-resolver.service';

describe('DrinksResolverService', () => {
  let service: DrinksResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinksResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
