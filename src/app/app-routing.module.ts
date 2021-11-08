import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './layout/admin-panel/admin-panel.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { UserPanelComponent } from './layout/user-panel/user-panel.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'admin', component:AdminPanelComponent},
  {path:'users', component:UserPanelComponent},
  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
