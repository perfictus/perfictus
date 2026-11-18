import { Component } from '@angular/core';
import { HomeHeroComponent } from "./components/home-hero/home-hero.component";
import { HomeAboutComponent } from "./components/home-about/home-about.component";
import { HomeServiceComponent } from "./components/home-service/home-service.component";
import { HomeChooseComponent } from "./components/home-choose/home-choose.component";
import { StatsComponent } from "../../components/stats/stats.component";

@Component({
  selector: 'app-home',
  imports: [HomeHeroComponent, HomeAboutComponent, StatsComponent, HomeServiceComponent, HomeChooseComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent { }
