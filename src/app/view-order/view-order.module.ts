import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewOrderPageRoutingModule } from './view-order-routing.module';
import { ViewOrderPage } from './view-order.page';
import { FileOpener } from '@awesome-cordova-plugins/file-opener';
import { NgxExtendedPdfViewerCommonModule } from 'ngx-extended-pdf-viewer/lib/ngx-extended-pdf-viewer-common.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxExtendedPdfViewerModule,
    ViewOrderPageRoutingModule
  ],
  declarations: [ViewOrderPage]
})
export class ViewOrderPageModule {}
