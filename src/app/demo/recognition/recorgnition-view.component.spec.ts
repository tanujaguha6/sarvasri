import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorgnitionViewComponent } from './recorgnition-view.component';

describe('RecorgnitionViewComponent', () => {
  let component: RecorgnitionViewComponent;
  let fixture: ComponentFixture<RecorgnitionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorgnitionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorgnitionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
