import { Component, Input, OnInit } from "@angular/core";
import { resourceType } from "src/app/models/resourceType";
import { CharacterService } from "../character.service";

@Component({
  selector: "card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})

export class CardListComponent implements OnInit {

  @Input() listToDisplay: any = [];
  @Input() itemType: resourceType | undefined;

  public constructor(private characterService : CharacterService) {


  }

  ngOnInit() {

  }

  public openResource(url: string){
    this.characterService.getResourceByUrl(url).subscribe((res)=>{
      console.log(res);
    })
  }
}
