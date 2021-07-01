import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsistencyIncomeComponent } from './consistency-income.component';

describe('ConsistencyIncomeComponent', () => {
  let component: ConsistencyIncomeComponent;
  let fixture: ComponentFixture<ConsistencyIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsistencyIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsistencyIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
