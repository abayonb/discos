import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDiscoComponent } from './pages/form-disco/form-disco.component';
import { VistaDiscoComponent } from './pages/vista-disco/vista-disco.component';

const routes: Routes = [
  {path: "formulario", component:FormDiscoComponent},
  {path: "vista", component:VistaDiscoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
