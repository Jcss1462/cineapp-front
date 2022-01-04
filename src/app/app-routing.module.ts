import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegistroComponent } from './component/usuario/registro/registro.component';
import { LoginComponent } from './component/usuario/login/login.component';


const routes: Routes = [
  {path:'registro-usuario',component:RegistroComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
