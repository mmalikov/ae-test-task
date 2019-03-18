import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() options: [string];
  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  select(event, option) {
    this.selected.emit(option);
  }

}
