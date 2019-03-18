import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDropdownButtonComponent } from './icon-dropdown-button.component';

describe('IconDropdownButtonComponent', () => {
  let component: IconDropdownButtonComponent;
  let fixture: ComponentFixture<IconDropdownButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconDropdownButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
