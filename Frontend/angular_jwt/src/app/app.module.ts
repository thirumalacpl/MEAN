import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRootComponent } from './features/customer/customer-root/customer-root.component';
import { CustomerRootModule } from './features/customer/customer-root/customer-root.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerRootModule
  ],
  providers: [],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
