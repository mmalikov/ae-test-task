import { ComponentFactory, ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { ENABLED_FORMAT_TYPES, FORMAT, IFormatComponent } from './format-types';

import { ApplyStyleFormatButtonComponent } from '../components/apply-style-format-button/apply-style-format-button.component';
import { ApplyReplaceFormatDropdownButtonComponent } from '../components/apply-replace-format-dropdown-button/apply-replace-format-dropdown-button.component';
import { ApplyColorStyleFormatComponent } from '../components/apply-color-style-format/apply-color-style-format.component';


@Injectable()
export class RenderFormatComponentsService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }

  public render(viewContainerRef) {
    viewContainerRef.clear();

    ENABLED_FORMAT_TYPES.forEach(format => this.renderFormatComponent(viewContainerRef, format));
  }

  private renderFormatComponent(viewContainerRef: ViewContainerRef, format: FORMAT) {
    switch (format) {
      case FORMAT.BOLD:
      case FORMAT.ITALIC:
      case FORMAT.UNDERLINE: {
        return this.createComponent(
          viewContainerRef,
          this.componentFactoryResolver.resolveComponentFactory(ApplyStyleFormatButtonComponent),
          format
        );
      }
      case FORMAT.COLOR:
        return this.createComponent(
          viewContainerRef,
          this.componentFactoryResolver.resolveComponentFactory(ApplyColorStyleFormatComponent),
          format
        );
      case FORMAT.SYNONYMUS:
        return this.createComponent(
          viewContainerRef,
          this.componentFactoryResolver.resolveComponentFactory(ApplyReplaceFormatDropdownButtonComponent),
          format
        );
    }


  }

  private createComponent(viewContainerRef: ViewContainerRef, componentFactory: ComponentFactory<any>, format: FORMAT) {
    const componentRef = viewContainerRef.createComponent(componentFactory);

    (componentRef.instance as IFormatComponent).format = format;

    componentRef.changeDetectorRef.detectChanges();
  }


}
