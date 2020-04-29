import { TestBed } from '@angular/core/testing';

import { NgxNavigationMenuService } from './ngx-navigation-menu.service';

describe('NgxNavigationMenuService', () => {
  let service: NgxNavigationMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNavigationMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
