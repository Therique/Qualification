import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ListarComponent } from './listar/listar.component';

export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'listar', component: ListarComponent },
    { path: 'funcionario', component: FuncionarioComponent }


];
