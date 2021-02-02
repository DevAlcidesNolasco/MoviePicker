import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  private apiRoute: string = "https://api.themoviedb.org/3";
  private apiKey: string = environment.theMovieDbApiKey;
  public language: string = "es-SV";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPopularMovies = (page: number = 1): Observable<any> => {
    return this.httpClient.get(`${this.apiRoute}/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${page}`);
  }

  public getPopularSeries = (page: number = 1): Observable<any> => {
    return this.httpClient.get(`${this.apiRoute}/tv/popular?api_key=${this.apiKey}&language=${this.language}&page=${page}`);
  }

  public getDetails = (type: string, id: number): Observable<any> => {
    return this.httpClient.get(`${this.apiRoute}/${type}/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }
}
