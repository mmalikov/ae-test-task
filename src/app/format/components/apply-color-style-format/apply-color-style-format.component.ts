import { Component, ChangeDetectionStrategy, Input, AfterViewInit, ViewContainerRef } from '@angular/core';
import { FORMAT, IFormatSetting } from '../../services/format-types';
import { Observable } from 'rxjs';
import { FormatService } from '../../services/format.service';

@Component({
  selector: 'app-apply-color-style-format',
  templateUrl: './apply-color-style-format.component.html',
  styleUrls: ['./apply-color-style-format.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplyColorStyleFormatComponent implements AfterViewInit {

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
    this.isApplied$.subscribe(value => console.log('[ ApplyColorStyleFormatComponent ngAfterViewInit() ] isApplied', value));
  }

  public updateSelectionFormat(color: string) {
    this.formatService.updateSelectionFormat(this.settings, color);
  }

}
