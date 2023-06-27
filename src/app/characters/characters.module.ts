import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character/character.component';
import { SharedModule } from '../shared/shared.module';
import { CardListComponent } from './card-list/card-list.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule,
    MatTabsModule
  ]
})
export class CharactersModule { }
