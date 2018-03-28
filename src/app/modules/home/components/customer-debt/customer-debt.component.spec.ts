import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDebtComponent } from './customer-debt.component';

describe('CustomerDebtComponent', () => {
  let component: CustomerDebtComponent;
  let fixture: ComponentFixture<CustomerDebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
