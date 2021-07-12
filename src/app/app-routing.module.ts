import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }, 
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'userinfo',
    component: UserInfoComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contactus',
    component: ContactusComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
