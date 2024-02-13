import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey= '2ed56a5ecf9ec3b4ed8dd2102b0ea13d'

  constructor(private http:HttpClient) { }

  getWeather(city: string) {
    var result = this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ed56a5ecf9ec3b4ed8dd2102b0ea13d&units=metric`);
    return result;
  };

  getForecast(city:string){
    var result = this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2ed56a5ecf9ec3b4ed8dd2102b0ea13d&units=metric`);
    return result;
  }
}
