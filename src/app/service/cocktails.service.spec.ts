import { TestBed } from '@angular/core/testing';

import { CocktailsService } from './cocktails.service';

describe('CocktailService', () => {
  let service: CocktailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
