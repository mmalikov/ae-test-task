import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyColorStyleFormatComponent } from './apply-color-style-format.component';

describe('ApplyColorStyleFormatComponent', () => {
  let component: ApplyColorStyleFormatComponent;
  let fixture: ComponentFixture<ApplyColorStyleFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyColorStyleFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyColorStyleFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
