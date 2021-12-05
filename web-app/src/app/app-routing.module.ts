import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovielistComponent } from './movielist/movielist.component';
import { AuthGuard } from './auth/auth.guard';
import { LoggedInServiceService } from './login/logged-in-service.service';


const routes: Routes = [
  {path: 'movies/:id', component: MovielistComponent,  canActivate: [AuthGuard]},
  {path: '', component: MovielistComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'movies', component: MovielistComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


