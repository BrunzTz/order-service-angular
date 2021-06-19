import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderServiceComponent } from './pages/order-service/containers/order-service/order-service.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule) },
  { path: 'order-service', loadChildren: () => import('./pages/order-service/order-service.module').then( m => m.OrderServiceModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
