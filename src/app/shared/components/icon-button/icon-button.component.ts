import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent {
  @Input() icon: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }
}
