import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrduPageRoutingModule } from './urdu-routing.module';

import { UrduPage } from './urdu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrduPageRoutingModule
  ],
  declarations: [UrduPage]
})
export class UrduPageModule {}
