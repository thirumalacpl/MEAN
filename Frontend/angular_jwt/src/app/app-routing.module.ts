import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CustomerRootModule } from './features/customer/customer-root/customer-root.module';
import { LoginComponent } from './core/components/login/login.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './core/components/guards/auth.guard';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/modules/admin/admin.module').then((m) => m.AdminModule),
  },
  // {
  //   path: 'customer/customer-root',
  //   loadChildren: () =>
  //     import('./features/customer/customer-root/customer-root.module').then((m) => m.CustomerRootModule),
  // },
  {path: '**', component: NotFoundComponent},
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./modules/admin/admin.module').then((m) => m.AdminModule),
  // },
  // {
  //   path: 'angularforms/angular-forms-root',
  //   loadChildren: () =>
  //     import(`./features/angularforms/angular-forms-root/angular-forms-root.module`).then((m) => m.AngularFormsRootModule),
  // },
  //{ path: 'first-module', loadChildren: () => import('./modules/first-module/first-module.module').then(m => m.FirstModuleModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
