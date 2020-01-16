import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';
import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [
  // { path:'',redirectTo:'home'},
  { path:'',component:HomeComponent },
  { path:'login',component: LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'cart',component:CartComponent, canActivate:[AuthGuard] },
  { path:'goods',component: GoodsComponent},
  { path:'**',component:NotfoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
