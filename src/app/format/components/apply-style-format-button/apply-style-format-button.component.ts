import { Component, ChangeDetectionStrategy, Input, AfterViewInit } from '@angular/core';
import { FormatService } from '../../services/format.service';
import { FORMAT, IFormatComponent, IFormatSetting } from '../../services/format-types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apply-style-format-button',
  templateUrl: './apply-style-format-button.component.html',
  styleUrls: ['./apply-style-format-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplyStyleFormatButtonComponent implements AfterViewInit, IFormatComponent {

  @Input() set format(format: FORMAT) {
    this.settings = this.formatService.getSettings(format);
  }

  settings: IFormatSetting;

  isApplied$: Observable<boolean>;

  constructor(
    private formatService: FormatService
  ) {
  }

  ngAfterViewInit() {
    this.isApplied$ = this.formatService.createApplied(this.settings);
  }

  public updateSelectionFormat() {
    this.formatService.updateSelectionFormat(this.settings);
  }

}
