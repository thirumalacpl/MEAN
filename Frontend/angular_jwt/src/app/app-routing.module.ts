import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRootModule } from './features/customer/customer-root/customer-root.module';

const routes: Routes = [
  {
    path: 'customer-root',
    loadChildren: () =>
      import(`./features/customer/customer-root/customer-root.module`).then((m) => m.CustomerRootModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
