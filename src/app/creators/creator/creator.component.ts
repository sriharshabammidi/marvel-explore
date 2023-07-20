import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Creator } from 'src/app/models/creator';
import { CreatorService } from '../creator.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  id: number = 0;
  private routeParameters: any;
  creator: Creator | undefined;
  constructor(private route: ActivatedRoute, private creatorService: CreatorService) { }

  ngOnInit() {
    this.routeParameters = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.populateCharacter();
      }
    });
  }
  populateCharacter() {
    this.creatorService.getCreatorById(this.id).subscribe(res => {
      this.creator = res.data.results[0];
      console.log(this.creator);
    })
  }
  ngOnDestroy() {
    this.routeParameters.unsubscribe();
  }
}
