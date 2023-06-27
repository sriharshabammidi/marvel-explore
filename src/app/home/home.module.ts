import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ]
})
export class HomeModule { }
