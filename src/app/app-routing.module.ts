import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgeComponent } from './component/Agefilter/age.component';


const routes: Routes = [
  { path: '', component: AgeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
