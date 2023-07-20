import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { ASeriesComponent } from './a-series/a-series.component';
import { SharedModule } from "../shared/shared.module";
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    SeriesComponent,
    ASeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class SeriesModule { }
