import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RePurchaseMonthlyIncomeComponent } from './re-purchase-monthly-income.component';

describe('RePurchaseMonthlyIncomeComponent', () => {
  let component: RePurchaseMonthlyIncomeComponent;
  let fixture: ComponentFixture<RePurchaseMonthlyIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RePurchaseMonthlyIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RePurchaseMonthlyIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
