import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {
  id: number = 0;
  private routeParameters: any;
  character: Character | undefined;
  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.routeParameters = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.populateCharacter();
      }
    });
  }
  populateCharacter() {
    this.characterService.getCharacterById(this.id).subscribe(res => {
      this.character = res.data.results[0];
      console.log(this.character);
    })
  }
  ngOnDestroy() {
    this.routeParameters.unsubscribe();
  }
}
