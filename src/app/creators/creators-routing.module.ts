import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorsComponent } from './creators.component';
import { CreatorComponent } from './creator/creator.component';

const routes: Routes = [
  { path: '', component: CreatorsComponent },
  {
    path: ':id',
    component: CreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorsRoutingModule { }
