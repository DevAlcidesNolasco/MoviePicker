import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IPopulars } from '../../interfaces/ipopulars';
import { IMovie } from 'src/app/interfaces/imovie';
import { ITv } from 'src/app/interfaces/itv';
import { IPerson } from 'src/app/interfaces/iperson';
import { IGenre } from 'src/app/interfaces/igenre';

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

  public getPopulars = (type: string, page: number = 1): Observable<IPopulars> => this.httpClient.get(`${this.apiRoute}/${type}/popular?api_key=${this.apiKey}&language=${this.language}&page=${page}`);

  public getSearch = (type: string, query: string, page: number = 1): Observable<any> => this.httpClient.get(`${this.apiRoute}/search/${type}?api_key=${this.apiKey}&language=${this.language}&query=${query}&page=${page}&include_adult=false`);

  public getDetails = (type: string, id: number): Observable<IMovie | ITv | IPerson> => this.httpClient.get(`${this.apiRoute}/${type}/${id}?api_key=${this.apiKey}&language=${this.language}`);

  public getGenresList = (type: string): Observable<IGenre[]> => {
    return this.httpClient.get<IGenre[]>(`${this.apiRoute}/genre/${type}/list?api_key=${this.apiKey}&language=${this.language}`);
  }

  public getByGenre = (params: { type: string, id: number, page: number }): Observable<any> => {
    return this.httpClient.get(`${this.apiRoute}/discover/${params.type}?api_key=${this.apiKey}&language=${this.language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${params.page}&with_genres=${params.id}`);
  }

  public getImages = (type: string, id: number): Observable<any> => {
    let query: string = `${this.apiRoute}/${type}/${id}/images?api_key=${this.apiKey}&language=${this.language}`;
    if (type === 'movie') query += "&include_image_language=es";
    return this.httpClient.get(query);
  }

}
