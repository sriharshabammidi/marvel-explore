import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public categories: string[] = ['Characters', 'Comics', 'Creators', 'Events', 'Series', 'Stories']

  constructor(private searchService: SearchService) {

  }

  ngOnInit(): void {
    console.log(Date.now());

  }

}
