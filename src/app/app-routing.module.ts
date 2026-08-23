import { NgModule } from '@angular/core';
import { DefaultTitleStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewPdComponent } from './pages/view-pd/view-pd.component';
import { DetailsPdComponent } from './pages/details-pd/details-pd.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { VerifyComponent } from './pages/verify/verify.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent },
  {path:"login", component:LoginComponent}, 
  {path:'view', component:ViewPdComponent},
  {path:"pd", component:DetailsPdComponent},
  { path:"basket", component:CartComponent},
  {path:"vc/:id", component: VerifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
