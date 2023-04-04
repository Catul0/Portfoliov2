import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentsEnglish/home/home.component';
import { InicioComponent } from './componentsEspañol/inicio/inicio.component';

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
