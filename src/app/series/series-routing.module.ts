import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series.component';
import { ASeriesComponent } from './a-series/a-series.component';

const routes: Routes = [
  { path: '', component: SeriesComponent },
  {
    path: ':id',
    component: ASeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
