import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myMovie } from '../model/myMovie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getMovie(searchTerm:any):Observable <myMovie> {
    return this.http.get(`https://www.omdbapi.com/?apikey=6c44cca3&s=${searchTerm}&page=1`)
  }
  additionalDetails(searchTerm:any){
    return this.http.get(`https://www.omdbapi.com/?apikey=6c44cca3&t=${searchTerm}&plot=full`)
  }
}
