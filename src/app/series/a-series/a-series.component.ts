import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aSeries } from 'src/app/models/aSeries';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-a-series',
  templateUrl: './a-series.component.html',
  styleUrls: ['./a-series.component.scss']
})
export class ASeriesComponent implements OnInit {

  id: number = 0;
  private routeParameters: any;
  series: aSeries | undefined;
  constructor(private route: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit() {
    this.routeParameters = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.populateCharacter();
      }
    });
  }
  populateCharacter() {
    this.seriesService.getSeriesById(this.id).subscribe(res => {
      this.series = res.data.results[0];
      console.log(this.series);
    })
  }
  ngOnDestroy() {
    this.routeParameters.unsubscribe();
  }
}
