import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KannadaPageRoutingModule } from './kannada-routing.module';

import { KannadaPage } from './kannada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KannadaPageRoutingModule
  ],
  declarations: [KannadaPage]
})
export class KannadaPageModule {}
