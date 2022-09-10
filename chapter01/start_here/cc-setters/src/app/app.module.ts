import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { VcLogsComponent } from './components/vc-logs/vc-logs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from '../../../../../chapter02/start_here/ad-attribute-directive/src/app/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    VersionControlComponent,
    VcLogsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
