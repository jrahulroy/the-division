import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";

const routes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [

  ]
})
export class HomeModule {

}
