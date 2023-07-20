import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/characters/character.service';
import { Comic } from 'src/app/models/comic';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  id: number = 0;
  private routeParameters: any;
  comic: Comic | undefined;
  constructor(private route: ActivatedRoute, private comicService: ComicService) { }

  ngOnInit() {
    this.routeParameters = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.populateCharacter();
      }
    });
  }
  populateCharacter() {
    this.comicService.getComicById(this.id).subscribe(res => {
      this.comic = res.data.results[0];
      console.log(this.comic);
    })
  }
  ngOnDestroy() {
    this.routeParameters.unsubscribe();
  }

}
