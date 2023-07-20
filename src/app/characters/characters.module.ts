import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character/character.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule,
    MatTabsModule
  ]
})
export class CharactersModule { }
