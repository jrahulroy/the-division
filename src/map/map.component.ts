import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {MapService} from "./map.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements AfterViewInit {
  constructor(private mapService: MapService,
              private route: ActivatedRoute) {
  }

  ngAfterViewInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        //scroll to top
        window.scroll(0, 0);


        this.mapService.drawMap(params.get('name'));
      });
  }
}
