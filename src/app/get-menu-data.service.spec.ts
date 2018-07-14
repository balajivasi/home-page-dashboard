import { TestBed, inject } from '@angular/core/testing';

import { GetMenuDataService } from './get-menu-data.service';

describe('GetMenuDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMenuDataService]
    });
  });

  it('should be created', inject([GetMenuDataService], (service: GetMenuDataService) => {
    expect(service).toBeTruthy();
  }));
});
