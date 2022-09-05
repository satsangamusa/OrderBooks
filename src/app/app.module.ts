import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { File, IWriteOptions } from '@awesome-cordova-plugins/file/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
   File,
   FileOpener,
   DocumentViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
