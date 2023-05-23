import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // { path: 'flocit', loadChildren: () => import('./flocit/flocit.module').then(m => m.FlocitModule) },

  // { path: 'flocit-home', loadChildren: () => import('./flocit-home/flocit-home.module').then(m => m.FlocitHomeModule) },
  // { path: 'flocit-works', loadChildren: () => import('./flocit-works/flocit-works.module').then(m => m.FlocitWorksModule) },
  { path: 'under-maintenance', component: UnderMaintenanceComponent, },
  { path: '404', component: InvalidRouteComponent, },
  { path: 'in-maintenance', redirectTo: 'under-maintenance' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
