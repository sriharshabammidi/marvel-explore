import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SharedService
  ],
  exports: [
    TruncatePipe
  ]
})
export class SharedModule { }
