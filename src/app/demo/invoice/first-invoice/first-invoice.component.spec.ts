import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInvoiceComponent } from './first-invoice.component';

describe('FirstInvoiceComponent', () => {
  let component: FirstInvoiceComponent;
  let fixture: ComponentFixture<FirstInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
