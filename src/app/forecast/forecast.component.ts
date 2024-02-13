import { WeatherService } from './../weather.service';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';



@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  constructor(
    private weatherService: WeatherService,
    private route:ActivatedRoute
    ) { }

  city!: string;
  forecastData:any[] = [];




  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.city = params['city'];
      this.getForecast();
    })
  }
  
  getForecast(){

    // var result = this.weatherService.getForecast(this.city);

    // console.log(result);

    // result.subscribe((data: any) => {
    //   this.forecastData = data
    // })


      this.weatherService.getForecast(this.city).pipe(
        pluck("list")
        ).subscribe(
        (data: any) => {
          for (let i = 0; i < data.length; i = i + 8) {
            
            this.forecastData.push(data[i]);
            // this.iconURL =
            // 'https://openweathermap.org/img/wn/' +
            // this.forecastData[i].weather[0].icon +
            // '@2x.png';
          }
          console.log(this.forecastData);
          
        },
        
        (error) => {
          console.error('Error fetching weather forecast:', error);
        }
      );
    }
  }


