import {NgModule} from "@angular/core";
import {MapComponent} from "./map.component";
import {RouterModule} from "@angular/router";
import {MapService} from "./map.service";

const routes = [
  {path: 'map/:name', component: MapComponent}
];

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    MapService
  ]
})
export class MapModule {

}
