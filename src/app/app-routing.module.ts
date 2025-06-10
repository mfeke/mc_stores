import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { CategoryComponent } from './pages/category/category.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:"home", component:HomeComponent}, 
  {path:"cart", component: CartComponent},
  {path:"c/:name", component: CategoryComponent},
  {path:"account/register", component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
