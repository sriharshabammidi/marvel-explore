import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsComponent } from './creators.component';
import { CreatorComponent } from './creator/creator.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreatorsComponent,
    CreatorComponent
  ],
  imports: [
    CommonModule,
    CreatorsRoutingModule,
    SharedModule
  ]
})
export class CreatorsModule { }
