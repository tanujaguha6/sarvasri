import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RePurchaseWeeklyIncomeComponent } from './re-purchase-weekly-income.component';

describe('RePurchaseWeeklyIncomeComponent', () => {
  let component: RePurchaseWeeklyIncomeComponent;
  let fixture: ComponentFixture<RePurchaseWeeklyIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RePurchaseWeeklyIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RePurchaseWeeklyIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
