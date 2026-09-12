import { NgModule } from '@angular/core';
import { DefaultTitleStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewPdComponent } from './pages/view-pd/view-pd.component';
import { DetailsPdComponent } from './pages/details-pd/details-pd.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ViewBashComponent } from './admin/view-bash/view-bash.component';
import { SignupComponent } from './admin/signup/signup.component';
import { SigninComponent } from './admin/signin/signin.component';
import { CategoriesComponent } from './admin/categories/categories.component';
const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent },
  {path:"login", component:LoginComponent}, 
  {path:"create", component:CreateAccountComponent},
  {path:'c/:name', component:ViewPdComponent},
  {path:"pd", component:DetailsPdComponent},
  { path:"basket", component:CartComponent},
  {path:'admin/add', component:AddItemComponent},
  {path:'dash/:name', component:ViewBashComponent},
  {path:"vc/:id", component: VerifyComponent},


  {path:'store/admin/signup', component:SignupComponent},
  {path:'store/admin/dashboard', component: DashboardComponent},
  {path:'store/admin/signin', component:SigninComponent},
  {path:'store/admin/categories', component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
