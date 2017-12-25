import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HomeModule} from "../home/home.module";
import {MapModule} from "../map/map.module";

const routes = [
  {path:'', redirectTo: '/home', pathMatch: "full"}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    MapModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
