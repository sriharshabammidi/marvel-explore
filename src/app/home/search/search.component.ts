import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Character } from 'src/app/models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public categories: string[] = ['Characters', 'Comics', 'Creators', 'Events', 'Series', 'Stories']
  public characters: Character[] = [];
  public searchText: string = "";
  public searchCategory: string = "Characters";
  constructor(private searchService: SearchService, private router: Router) {

  }

  ngOnInit(): void {

  }

  updateSearch(): void {
    if (this.searchText) {
      switch (this.searchCategory) {
        case "Characters":
          this.searchCharacters();
      }
    }
  }
  searchCharacters(): void {
    this.searchService.getCharacters(this.searchText).subscribe(
      res => {
        this.characters = res.data.results;
      }
    )
  }
  ShowCharacter(id: number) {
    this.router.navigate(['/characters', id]);
  }
}
