import { NgModule, isDevMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CustomerRootComponent } from './features/customer/customer-root/customer-root.component';
// import { CustomerRootModule } from './features/customer/customer-root/customer-root.module';
import { LoginComponent } from './core/components/login/login.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { customerFeatureKey, customerReducer } from './customer/store/reducer/customer.reducer';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    CustomerViewComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature(customerFeatureKey,customerReducer)

  ],
  providers: [], // Add CookieService here
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
