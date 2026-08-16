import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewPdComponent } from './pages/view-pd/view-pd.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path:'', component: HomeComponent },
  {path:'view', component:ViewPdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
