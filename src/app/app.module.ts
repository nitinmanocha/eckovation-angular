import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';

import { Item } from './item';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {HttpClientModule} from '@angular/common/http';
import { ItemComponent } from './item/item.component';


const ROUTES: Routes = [
{path:'',component:HomepageComponent},
{path:'cart',component:ItemComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
	 FormsModule,
	  Ng2PageScrollModule,
	  HttpClientModule,
		RouterModule.forRoot(ROUTES, {anchorScrolling: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
