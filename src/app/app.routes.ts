import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ServiciosComponent } from './servicios/servicios';
import { ContactoComponent } from './contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
];   