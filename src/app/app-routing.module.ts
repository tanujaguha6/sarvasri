import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule)
      },
      {
        path: 'profile-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      { 
        path: 'commission', loadChildren: () => import('./demo/commission/commission.module').then(m => m.CommissionModule) 
      },
      { 
        path: 'deduction', loadChildren: () => import('./demo/deduction/deduction.module').then(m => m.DeductionModule) 
      },
      { 
        path: 'wallet', loadChildren: () => import('./demo/wallet/wallet.module').then(m => m.WalletModule) 
      },
      { 
        path: 'matching-report', loadChildren: () => import('./demo/matching-report/matching-report.module').then(m => m.MatchingReportModule) 
      },
      { 
        path: 'recognition', loadChildren: () => import('./demo/recognition/recorgnition-view.module').then(m => m.RecorgnitionViewModule) 
      },
      { 
        path: 'member', loadChildren: () => import('./demo/member/member.module').then(m => m.MemberModule) 
      },
      { 
        path: 'invoice', loadChildren: () => import('./demo/invoice/invoice.module').then(m => m.InvoiceModule) 
      },
      { 
        path: 'product', loadChildren: () => import('./demo/product/product.module').then(m => m.ProductModule) 
      },
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
