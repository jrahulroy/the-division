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
    RouterModule.forRoot(routes)
  ],
  providers: [

  ]
})
export class HomeModule {

}
