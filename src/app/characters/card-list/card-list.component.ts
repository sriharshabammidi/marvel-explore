import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})

export class CardListComponent implements OnInit {

  @Input() listToDisplay: any = [];

  ngOnInit() {

  }
}
