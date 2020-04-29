import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNavigationMenuComponent } from './ngx-navigation-menu.component';

describe('NgxNavigationMenuComponent', () => {
  let component: NgxNavigationMenuComponent;
  let fixture: ComponentFixture<NgxNavigationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNavigationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
