import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPurchaseComponent } from './first-purchase.component';

describe('FirstPurchaseComponent', () => {
  let component: FirstPurchaseComponent;
  let fixture: ComponentFixture<FirstPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
