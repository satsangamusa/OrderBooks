import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HindiPage } from './hindi.page';

const routes: Routes = [
  {
    path: '',
    component: HindiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HindiPageRoutingModule {}
