import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appControlTemplate]'
})
export class ControlTemplateDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) {
  }

}
