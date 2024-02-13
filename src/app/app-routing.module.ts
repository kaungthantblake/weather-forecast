import { ForecastComponent } from './forecast/forecast.component';
import { HomeComponent } from "./home/home.component";
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path:'',
  component:HomeComponent,
},
{
  path:"home",
  component:HomeComponent,
},
{
path:'forecast/:city',
component:ForecastComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
