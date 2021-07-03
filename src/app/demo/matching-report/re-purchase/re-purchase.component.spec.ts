import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RePurchaseComponent } from './re-purchase.component';

describe('RePurchaseComponent', () => {
  let component: RePurchaseComponent;
  let fixture: ComponentFixture<RePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RePurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
