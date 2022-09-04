import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdiyaPageRoutingModule } from './odiya-routing.module';

import { OdiyaPage } from './odiya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdiyaPageRoutingModule
  ],
  declarations: [OdiyaPage]
})
export class OdiyaPageModule {}
