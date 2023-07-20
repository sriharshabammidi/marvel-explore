import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { resourceType } from 'src/app/models/resourceType';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() listToDisplay: any = [];
  @Input() itemType: resourceType | undefined;
  @Output() scrolledToBottom = new EventEmitter();

  public constructor(private router: Router) {


  }

  ngOnInit() {
    console.log(this.listToDisplay);
  }

  public openResource(url: string) {
    const urlParts = url.split('/')
    const length = urlParts.length;
    const route = urlParts.length > 0 ? urlParts[length - 2] + '/' + urlParts[length - 1] : '';
    if (route) {
      this.router.navigateByUrl(route);
    }
  }

  onScroll($event: Event): void {
    const target = $event.target as HTMLElement;
    console.log("scrolling");
    console.log(`offset ${target.offsetHeight} \n scroll top ${target.scrollTop} \n scroll height ${target.scrollHeight}`);
    if (target.offsetHeight + target.scrollTop >= target.scrollHeight) {
      this.scrolledToBottom.emit();
      console.log("End");
    }
  }
}
