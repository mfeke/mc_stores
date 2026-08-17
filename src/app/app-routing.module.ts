import { NgModule } from '@angular/core';
import { DefaultTitleStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewPdComponent } from './pages/view-pd/view-pd.component';
import { DetailsPdComponent } from './pages/details-pd/details-pd.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent },
  {path:'view', component:ViewPdComponent},
  {path:"pd", component:DetailsPdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
