import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TextService } from '../shared/services/text-service/text.service';
import { FormatService } from '../format/services/format.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('fileContent') fileContent;

  text$: Promise<string>;
  fileContentObserver: MutationObserver;

  constructor(
    private textService: TextService,
    private formatService: FormatService,
  ) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();
  }

  ngAfterViewInit() {
    this.initMutationObserver();
  }

  ngOnDestroy() {
    if (this.fileContentObserver) {
      this.fileContentObserver.disconnect();
    }
  }

  private initMutationObserver() {
    this.fileContentObserver = new MutationObserver(mutations =>
      mutations.forEach(mutation => this.formatService.checkStylesStoreReferentialIntegrity(mutation))
    );

    const config = { childList: true, characterData: true, subtree: true };

    this.fileContentObserver.observe(this.fileContent.nativeElement, config);
  }
}
