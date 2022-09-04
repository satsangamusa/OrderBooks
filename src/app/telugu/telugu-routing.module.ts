import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeluguPage } from './telugu.page';

const routes: Routes = [
  {
    path: '',
    component: TeluguPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeluguPageRoutingModule {}
