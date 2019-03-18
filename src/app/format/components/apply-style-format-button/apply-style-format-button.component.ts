import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormatService } from '../../services/format.service';
import { FORMAT, IFormatComponent, IFormatSetting } from '../../services/format-types';

@Component({
  selector: 'app-apply-style-format-button',
  templateUrl: './apply-style-format-button.component.html',
  styleUrls: ['./apply-style-format-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplyStyleFormatButtonComponent implements IFormatComponent {

  @Input() set format(format: FORMAT) {
    this.settings = this.formatService.getSettings(format);
  }

  settings: IFormatSetting;

  constructor(
    private formatService: FormatService
  ) {
  }

  public updateSelectionFormat() {
    this.formatService.updateSelectionFormat(this.settings);
  }

}
