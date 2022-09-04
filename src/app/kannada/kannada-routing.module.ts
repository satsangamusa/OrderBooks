import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KannadaPage } from './kannada.page';

const routes: Routes = [
  {
    path: '',
    component: KannadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KannadaPageRoutingModule {}
