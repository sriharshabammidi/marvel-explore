import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { TruncatePipe } from './truncate.pipe';
import { CardListComponent } from './card-list/card-list.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    TruncatePipe,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SharedService
  ],
  exports: [
    TruncatePipe,
    CardListComponent,
    MatTabsModule
  ]
})
export class SharedModule { }
