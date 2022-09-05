import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'telugu',
    loadChildren: () => import('./telugu/telugu.module').then( m => m.TeluguPageModule)
  },
  {
    path: 'kannada',
    loadChildren: () => import('./kannada/kannada.module').then( m => m.KannadaPageModule)
  },
  {
    path: 'hindi',
    loadChildren: () => import('./hindi/hindi.module').then( m => m.HindiPageModule)
  },
  {
    path: 'english',
    loadChildren: () => import('./english/english.module').then( m => m.EnglishPageModule)
  },
  {
    path: 'odiya',
    loadChildren: () => import('./odiya/odiya.module').then( m => m.OdiyaPageModule)
  },
  {
    path: 'urdu',
    loadChildren: () => import('./urdu/urdu.module').then( m => m.UrduPageModule)
  },
  {
    path: 'tamil',
    loadChildren: () => import('./tamil/tamil.module').then( m => m.TamilPageModule)
  },
  {
    path: 'view-order',
    loadChildren: () => import('./view-order/view-order.module').then( m => m.ViewOrderPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
