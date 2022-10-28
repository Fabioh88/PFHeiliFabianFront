import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaboutComponent } from './components/about/editabout.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditskillComponent } from './components/skills/editskill.component';
import { NewskillComponent } from './components/skills/newskill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component : LoginComponent},
  {path:'nuevaexperiencia', component: NewExperienciaComponent},
  {path:'editexperiencia/:id', component: EditExperienciaComponent},
  {path:'nuevaeducacion', component: NeweducacionComponent},
  {path:'editeducacion/:id', component: EditeducacionComponent},
  {path:'nuevaskill', component: NewskillComponent},
  {path:'editskill/:id', component: EditskillComponent},
  {path: 'editabout/:id', component: EditaboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
