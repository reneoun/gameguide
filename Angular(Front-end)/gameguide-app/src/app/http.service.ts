import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../app/models/Game';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllGames() {
    return this.http.get<Game[]>('http://localhost:8080/game/all');
  }
}
