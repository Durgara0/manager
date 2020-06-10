import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustBsNavbarComponent } from './cust-bs-navbar.component';

describe('CustBsNavbarComponent', () => {
  let component: CustBsNavbarComponent;
  let fixture: ComponentFixture<CustBsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustBsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustBsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
