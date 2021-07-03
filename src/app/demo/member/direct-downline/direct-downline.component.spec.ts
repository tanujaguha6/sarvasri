import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectDownlineComponent } from './direct-downline.component';

describe('DirectDownlineComponent', () => {
  let component: DirectDownlineComponent;
  let fixture: ComponentFixture<DirectDownlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectDownlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectDownlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
