import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegistroComponent } from './component/usuario/registro/registro.component';
import { LoginComponent } from './component/usuario/login/login.component';
import { MisMetodosComponent } from './component/metodosDePago/mis-metodos/mis-metodos.component';
import { NuevoMetodoComponent } from './component/metodosDePago/nuevo-metodo/nuevo-metodo.component';


const routes: Routes = [
  {path:'registro-usuario',component:RegistroComponent},
  {path:'login',component:LoginComponent},
  {path:'misMetodos',component:MisMetodosComponent},
  {path:'nuevoMetodo',component:NuevoMetodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
