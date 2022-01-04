import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegistroComponent } from './component/usuario/registro/registro.component';


const routes: Routes = [
  {path:'registro-usuario',component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
