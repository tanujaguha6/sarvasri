import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstIncomeDeductionComponent } from './first-income-deduction.component';

describe('FirstIncomeDeductionComponent', () => {
  let component: FirstIncomeDeductionComponent;
  let fixture: ComponentFixture<FirstIncomeDeductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstIncomeDeductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstIncomeDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
