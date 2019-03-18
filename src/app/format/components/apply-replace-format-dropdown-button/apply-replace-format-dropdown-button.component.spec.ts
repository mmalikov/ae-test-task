import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyReplaceFormatDropdownButtonComponent } from './apply-replace-format-dropdown-button.component';

describe('ApplyReplaceFormatDropdownButtonComponent', () => {
  let component: ApplyReplaceFormatDropdownButtonComponent;
  let fixture: ComponentFixture<ApplyReplaceFormatDropdownButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyReplaceFormatDropdownButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyReplaceFormatDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
