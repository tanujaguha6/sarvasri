import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './core/guards/authguard.service';
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
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule),
        canActivate: [AuthguardService] 
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule),
        canActivate: [AuthguardService]
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule),
		canActivate: [AuthguardService]
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule),
		canActivate: [AuthguardService]
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule),
		canActivate: [AuthguardService]
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule),
		canActivate: [AuthguardService]
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule),
		canActivate: [AuthguardService]
      },
      {
        path: 'profile-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule),
        canActivate: [AuthguardService]
      },
      { 
        path: 'commission', loadChildren: () => import('./demo/commission/commission.module').then(m => m.CommissionModule),
        canActivate: [AuthguardService]
      },
      { 
        path: 'deduction', loadChildren: () => import('./demo/deduction/deduction.module').then(m => m.DeductionModule),
        canActivate: [AuthguardService] 
      },
      { 
        path: 'wallet', loadChildren: () => import('./demo/wallet/wallet.module').then(m => m.WalletModule),
        canActivate: [AuthguardService]
      },
      { 
        path: 'matching-report', loadChildren: () => import('./demo/matching-report/matching-report.module').then(m => m.MatchingReportModule),
        canActivate: [AuthguardService] 
      },
      { 
        path: 'recognition', loadChildren: () => import('./demo/recognition/recorgnition-view.module').then(m => m.RecorgnitionViewModule),
        canActivate: [AuthguardService]
      },
      { 
        path: 'member', loadChildren: () => import('./demo/member/member.module').then(m => m.MemberModule),
        canActivate: [AuthguardService] 
      },
      { 
        path: 'invoice', loadChildren: () => import('./demo/invoice/invoice.module').then(m => m.InvoiceModule),
        canActivate: [AuthguardService] 
      },
      { 
        path: 'product', loadChildren: () => import('./demo/product/product.module').then(m => m.ProductModule),
        canActivate: [AuthguardService] 
      },
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
