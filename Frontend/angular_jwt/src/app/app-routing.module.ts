import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRootModule } from './features/customer/customer-root/customer-root.module';

const routes: Routes = [
  // {
  //   path: 'customer/customer-root',
  //   loadChildren: () =>
  //     import(`./features/customer/customer-root/customer-root.module`).then((m) => m.CustomerRootModule),
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
