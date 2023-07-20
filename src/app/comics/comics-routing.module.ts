import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics.component';
import { ComicComponent } from './comic/comic.component';

const routes: Routes = [{ path: '', component: ComicsComponent },
{
  path: ':id',
  component: ComicComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
