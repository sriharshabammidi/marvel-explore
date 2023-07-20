import { Component, HostListener, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Character } from 'src/app/models/character';
import { Router } from '@angular/router';
import { SearchRequest } from 'src/app/models/searchRequest';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public categories: string[] = ['Characters', 'Comics', 'Creators', 'Events', 'Series', 'Stories']
  public searchResults: any[] = [];
  public searchText: string = "";
  public searchCategory: string = "Characters";
  public selectedDiv: number = -1;
  public response: any;
  public searchRequest: SearchRequest = {
    searchText: '',
    limit: 5,
    offset: 0
  };
  constructor(private searchService: SearchService, private router: Router) {

  }

  ngOnInit(): void {

  }

  // updateSearch(): void {
  //   if (this.searchText) {
  //     this.searchRequest.searchText = this.searchText;
  //     this.searchRequest.offset = this.pageNumber;
  //     switch (this.searchCategory) {
  //       case "Characters":
  //         this.searchService.getCharacters(this.searchRequest).subscribe(
  //           res => {
  //             this.response = res.data;
  //             if (this.pageNumber > 1) {
  //               this.searchResults = [...this.searchResults, ...this.response.results];
  //             } else {
  //               this.searchResults = this.response.results;
  //             }
  //           }
  //         )
  //         break;
  //       case "Series":
  //         this.searchService.getSeries(this.searchText).subscribe(
  //           res => {
  //             this.response = res.data;
  //             if (this.pageNumber > 1) {
  //               this.searchResults = [...this.searchResults, ...this.response.results];
  //             } else {
  //               this.searchResults = this.response.results;
  //             }
  //           }
  //         )
  //         break;
  //       case "Creators":
  //         this.searchService.getCreators(this.searchText).subscribe(
  //           res => {
  //             this.response = res.data;
  //             if (this.pageNumber > 1) {
  //               this.searchResults = [...this.searchResults, ...this.response.results];
  //             } else {
  //               this.searchResults = this.response.results;
  //             }
  //           }
  //         )
  //         break;
  //       case "Comics":
  //         this.searchService.getComics(this.searchText).subscribe(
  //           res => {
  //             this.response = res.data;
  //             if (this.pageNumber > 1) {
  //               this.searchResults = [...this.searchResults, ...this.response.results];
  //             } else {
  //               this.searchResults = this.response.results;
  //             }
  //           }
  //         )
  //         break;
  //       case "Events":
  //         this.searchService.getEvents(this.searchText).subscribe(
  //           res => {
  //             this.response = res.data;
  //             if (this.pageNumber > 1) {
  //               this.searchResults = [...this.searchResults, ...this.response.results];
  //             } else {
  //               this.searchResults = this.response.results;
  //             }
  //           }
  //         )
  //         break;
  //       case "Stories":
  //         this.searchService.getStories(this.searchText).subscribe(
  //           res => {
  //             this.response = res.data;
  //             if (this.pageNumber > 1) {
  //               this.searchResults = [...this.searchResults, ...this.response.results];
  //             } else {
  //               this.searchResults = this.response.results;
  //             }
  //           }
  //         )
  //         break;
  //     }
  //   }
  // }
  showResultDetails(id: number) {
    this.router.navigate([`/${this.searchCategory.toLocaleLowerCase()}`, id]);
  }

  updateSelectedElement(index: number): void {
    this.selectedDiv = index;
  }

  onKeydown($event: any) {
    if (this.searchResults && this.selectedDiv < this.searchResults.length) {
      this.selectedDiv += 1;
    }
    this.scrollToSelectedElement();
  }

  onEnter($event: any) {
    if (this.selectedDiv >= 0) {
      this.showResultDetails(this.searchResults[this.selectedDiv].id);
    }
  }

  onKeyup($event: any): void {
    if (this.searchResults && this.selectedDiv >= 0) {
      this.selectedDiv -= 1;
    }
    this.scrollToSelectedElement();
  }

  scrollToSelectedElement() {
    document.querySelector('.result-content-selected')?.scrollIntoView();
  }

  onScroll($event: Event): void {
    const target = $event.target as HTMLElement;
    if (target.offsetHeight + target.scrollTop >= target.scrollHeight) {
      if (this.response.offset < this.response.total) {
        this.updateSearchAsync(false);
      }
    }
  }
  private async getSearchResults(
    serviceMethod: (searchRequest: SearchRequest) => Observable<Response<any>>,
    request: SearchRequest
  ): Promise<any[]> {
    try {
      const res = await serviceMethod.call(this.searchService, request).toPromise();
      if (res) {
        this.response = res.data;
        return this.response.results;
      }
      return [];
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  }

  async updateSearchAsync(forceEmpty: boolean = true): Promise<void> {
    if (!this.searchText) {
      return;
    }

    if (forceEmpty) {
      this.searchResults = [];
    }

    this.searchRequest.searchText = this.searchText;
    this.searchRequest.offset = this.searchResults.length;

    let searchResults: any[];
    switch (this.searchCategory) {
      case "Characters":
        searchResults = await this.getSearchResults(this.searchService.getCharacters, this.searchRequest);
        break;
      case "Series":
        searchResults = await this.getSearchResults(this.searchService.getSeries, this.searchRequest);
        break;
      case "Creators":
        searchResults = await this.getSearchResults(this.searchService.getCreators, this.searchRequest);
        break;
      case "Comics":
        searchResults = await this.getSearchResults(this.searchService.getComics, this.searchRequest);
        break;
      case "Events":
        searchResults = await this.getSearchResults(this.searchService.getEvents, this.searchRequest);
        break;
      case "Stories":
        searchResults = await this.getSearchResults(this.searchService.getStories, this.searchRequest);
        break;
      default:
        searchResults = [];
    }

    if (this.searchResults.length > 1) {
      this.searchResults = [...this.searchResults, ...searchResults];
    } else {
      this.searchResults = searchResults;
    }
  }
}
