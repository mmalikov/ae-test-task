import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatOptionModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TextService } from './text-service/text.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [
    TextService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
