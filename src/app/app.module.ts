import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatMenuModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ApplyStyleFormatButtonComponent } from './format/components/apply-style-format-button/apply-style-format-button.component';
import { ApplyReplaceFormatDropdownButtonComponent } from './format/components/apply-replace-format-dropdown-button/apply-replace-format-dropdown-button.component';
import { FormatService } from './format/services/format.service';
import { ControlTemplateDirective } from './shared/components/control-template.directive';
import { IconButtonComponent } from './shared/components/icon-button/icon-button.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { IconDropdownButtonComponent } from './shared/components/icon-dropdown-button/icon-dropdown-button.component';
import { TextService } from './shared/services/text-service/text.service';
import { SynonymsService } from './shared/services/synonyms/synonyms.service';
import { RenderFormatComponentsService } from './format/services/render-format-components.service';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    FooterComponent,
    ControlTemplateDirective,
    DropdownComponent,
    IconButtonComponent,
    IconDropdownButtonComponent,
    ApplyStyleFormatButtonComponent,
    ApplyReplaceFormatDropdownButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    ColorPickerModule,
  ],
  entryComponents: [
    ApplyStyleFormatButtonComponent,
    ApplyReplaceFormatDropdownButtonComponent,
  ],
  providers: [
    TextService,
    FormatService,
    SynonymsService,
    RenderFormatComponentsService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
