import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPackageInvoiceComponent } from './first-package-invoice.component';

describe('FirstPackageInvoiceComponent', () => {
  let component: FirstPackageInvoiceComponent;
  let fixture: ComponentFixture<FirstPackageInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPackageInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPackageInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
