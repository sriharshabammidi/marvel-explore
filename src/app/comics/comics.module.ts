import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { ComicComponent } from './comic/comic.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ComicsComponent,
    ComicComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
