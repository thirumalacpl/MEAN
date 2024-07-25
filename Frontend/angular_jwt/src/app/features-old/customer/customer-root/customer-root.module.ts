import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRootRoutingModule } from './customer-root-routing.module';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';


@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerRootRoutingModule
  ],
  exports: [CustomerAddComponent, CustomerListComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomerRootModule { }
