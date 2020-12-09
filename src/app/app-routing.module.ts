import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pages/pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'hermanos',
    loadChildren: () => import('./pages/hermanos/hermanos.module').then( m => m.HermanosPageModule)
  },
  {
    path: 'grupos',
    loadChildren: () => import('./pages/grupos/grupos.module').then( m => m.GruposPageModule)
  },
  {
    path: 'acuerdos',
    loadChildren: () => import('./pages/acuerdos/acuerdos.module').then( m => m.AcuerdosPageModule)
  },
  {
    path: 'enlaces',
    loadChildren: () => import('./pages/enlaces/enlaces.module').then( m => m.EnlacesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
