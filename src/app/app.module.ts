import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms'

import { QuillModule } from 'ngx-quill'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewPdComponent } from './pages/view-pd/view-pd.component';
import { FilterComponent } from './components/filter/filter.component';
import { DetailsPdComponent } from './pages/details-pd/details-pd.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { UniquePipe } from './unique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ViewPdComponent,
    FilterComponent,
    DetailsPdComponent,
    CartComponent,
    LoginComponent,
    VerifyComponent,
    LoadingComponent,
    CreateAccountComponent,
    ReplacePipe,
    AddItemComponent,
    UniquePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()


  ],
  providers: [
    

  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
