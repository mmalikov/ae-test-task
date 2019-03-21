import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() options: [string];
  @Output() opened: EventEmitter<any> = new EventEmitter();
  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  open() {
    this.opened.emit();
  }

  select(event, option) {
    this.selected.emit(option);
  }
}
