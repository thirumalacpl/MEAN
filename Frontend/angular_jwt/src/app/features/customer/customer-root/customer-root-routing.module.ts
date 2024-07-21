import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerRootComponent} from './customer-root.component'
import {CustomerAddComponent} from './components/customer-add/customer-add.component'
import { CustomerListComponent } from './components/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerRootComponent,
    children: [{ path: 'customer-root', component: CustomerRootComponent }],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRootRoutingModule { }
