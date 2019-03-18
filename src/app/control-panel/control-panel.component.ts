import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ControlTemplateDirective } from '../shared/components/control-template.directive';
import { RenderFormatComponentsService } from '../format/services/render-format-components.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent implements AfterViewInit {
  @ViewChild(ControlTemplateDirective) formatButtonContainer: ControlTemplateDirective;

  constructor(
    private renderFormatComponentsService: RenderFormatComponentsService
  ) {
  }

  ngAfterViewInit() {
    this.renderFormatComponentsService.render(this.formatButtonContainer.viewContainerRef);
  }


}
