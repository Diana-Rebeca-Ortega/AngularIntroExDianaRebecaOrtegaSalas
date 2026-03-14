import { Routes } from '@angular/router';
import { HomeComponent } from '../componentes/home/home';
import { LoginComponent } from '../componentes/login/login'; 
import { MenuPrincipalComponent } from '../componentes/menu-principal/menu-principal';
import { FormularioRegistro } from '../componentes/formulario-registro/formulario-registro';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuPrincipalComponent },
  { path: 'registro', component: FormularioRegistro },
 { path: '', component: HomeComponent }
];
