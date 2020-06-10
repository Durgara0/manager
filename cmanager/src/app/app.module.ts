import { PersonService } from './person.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustBsNavbarComponent } from './cust-bs-navbar/cust-bs-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    CustomersComponent,
    NewCustomerComponent,
    CustBsNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'',component:CustomersComponent},
      {path:'new-customer/:firstName/:id',component:NewCustomerComponent},
      {path:'new-customer',component:NewCustomerComponent}
    ]),
    NgbModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
