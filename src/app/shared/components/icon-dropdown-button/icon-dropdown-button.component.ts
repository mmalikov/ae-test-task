import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-icon-dropdown-button',
  templateUrl: './icon-dropdown-button.component.html',
  styleUrls: ['./icon-dropdown-button.component.scss'],
})
export class IconDropdownButtonComponent {
  @Input() icon: string;
  @Input() options: [string];
  @Output() loadOptions: EventEmitter<any> = new EventEmitter();
  @Output() selectOption: EventEmitter<string> = new EventEmitter();

  constructor() {
  }
  load(event) {
    this.loadOptions.emit(event);
  }

  select(option: string) {
    this.selectOption.emit(option);
  }
}
