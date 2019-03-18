import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyStyleFormatButtonComponent } from './apply-style-format-button.component';

describe('ApplyStyleFormatButtonComponent', () => {
  let component: ApplyStyleFormatButtonComponent;
  let fixture: ComponentFixture<ApplyStyleFormatButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyStyleFormatButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyStyleFormatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
