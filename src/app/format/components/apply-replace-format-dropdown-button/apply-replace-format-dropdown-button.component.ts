import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FORMAT, IFormatComponent, IFormatSetting } from '../../services/format-types';
import { FormatService } from '../../services/format.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apply-replace-format-dropdown-button',
  templateUrl: './apply-replace-format-dropdown-button.component.html',
  styleUrls: ['./apply-replace-format-dropdown-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplyReplaceFormatDropdownButtonComponent implements OnInit, IFormatComponent {

  @Input() set format(format: FORMAT) {
    this.settings = this.formatService.getSettings(format);
  }

  settings: IFormatSetting;

  options$: Observable<[string]>;

  constructor(
    private formatService: FormatService
  ) {
  }

  ngOnInit() {
    this.options$ = this.formatService.getOptions();
  }

  public loadFormatOptions() {
    this.formatService.loadFormatOptions(this.settings.format);
  }

  public updateSelectionFormat(option?: string) {
    this.formatService.clearFormatOptions();
    this.formatService.updateSelectionFormat(this.settings, option);
  }
}
