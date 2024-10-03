import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-pizzeria',
    loadChildren: () => import('./my-pizzeria/my-pizzeria.module').then( m => m.MyPizzeriaPageModule)
  },
  {
    path: 'add-pizzas',
    loadChildren: () => import('./add-pizzas/add-pizzas.module').then( m => m.AddPizzasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
