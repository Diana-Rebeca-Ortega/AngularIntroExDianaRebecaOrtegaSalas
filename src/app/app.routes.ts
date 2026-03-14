import { Routes } from '@angular/router';
import { HomeComponent } from '../componentes/home/home';
import { LoginComponent } from '../componentes/login/login'; 
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
   { path: '', component: HomeComponent }
];
