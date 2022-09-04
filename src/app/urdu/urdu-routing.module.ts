import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrduPage } from './urdu.page';

const routes: Routes = [
  {
    path: '',
    component: UrduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrduPageRoutingModule {}
