import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdiyaPage } from './odiya.page';

const routes: Routes = [
  {
    path: '',
    component: OdiyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdiyaPageRoutingModule {}
