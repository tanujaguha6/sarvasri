import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailPackageInvoiceComponent } from './retail-package-invoice.component';

describe('RetailPackageInvoiceComponent', () => {
  let component: RetailPackageInvoiceComponent;
  let fixture: ComponentFixture<RetailPackageInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailPackageInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailPackageInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
