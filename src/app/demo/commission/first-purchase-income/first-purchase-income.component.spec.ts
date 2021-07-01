import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPurchaseIncomeComponent } from './first-purchase-income.component';

describe('FirstPurchaseIncomeComponent', () => {
  let component: FirstPurchaseIncomeComponent;
  let fixture: ComponentFixture<FirstPurchaseIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPurchaseIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPurchaseIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
