import { Routes } from '@angular/router';
import { HomeComponent } from '../componentes/home/home';
import { LoginComponent } from '../componentes/login/login'; 
import { MenuPrincipalComponent } from '../componentes/menu-principal/menu-principal';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuPrincipalComponent },
 { path: '', component: HomeComponent }
];
