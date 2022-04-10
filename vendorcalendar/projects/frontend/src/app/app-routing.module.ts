import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

const accountModule = () =>
  import('./pages/account/account.module').then((x) => x.AccountModule);

const homeModule = () => import('./pages/home/home.module').then((x) => x.HomeModule);

const routes: Routes = [
  {
    path: '', loadChildren: homeModule,
    // canActivate: [AuthGuard]
  },
  { path: 'account', loadChildren: accountModule },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
    // canActivate: [AuthGuard]
  },
  {
    path: 'vendor',
    loadChildren: () => import('./pages/vendor/vendor.module').then(m => m.VendorModule),
    data: {
      breadcrumb: {
        label: 'Dashboard'
      }
    },
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/page/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
