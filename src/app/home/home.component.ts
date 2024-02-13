import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, RouterModule,Routes } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  feelLike: number=0;
  min:number = 0;
  max:number = 0
  humidity: number = 0;
  pressure: number = 0;
  gust: number = 0;
  wind: number = 0;
  description: string = "";
  city: string = 'Mandalay'; // Default city
  iconURL: string = '';

  constructor(private WeatherService: WeatherService,private router:Router) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
  }

  searchWeather() {
    this.getWeatherData(this.city);
  }

  private getWeatherData(city: string) {
    this.WeatherService.getWeather(city).subscribe({
      next: (res: any) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.min = this.myWeather.main.temp_min;
        this.max = this.myWeather.main.temp_max
        this.humidity = this.myWeather.main.humidity;
        this.wind = this.myWeather.wind.speed;
        this.description = this.myWeather.weather[0].description;
        const iconID = this.myWeather.weather[0].icon;
        this.iconURL = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
        this.feelLike = this.myWeather.main.feels_like;
        this.pressure = this.myWeather.main.pressure
        this.gust = this.myWeather.wind.gust
        this.iconURL =
          'https://openweathermap.org/img/wn/' +
          this.myWeather.weather[0].icon +
          '@2x.png';

          this.myWeather = true
          // this.navigateToWeatherForecast(this.city);
      },
    });
  }
  private navigateToWeatherForecast(city: string) {

    this.router.navigate(['/forecast', city]);
  }
}