import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../app/models/Game';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllGames() {
    return this.http.get<Game[]>('http://192.168.178.171:8080/game/all');
  }

  getGamebyID(id:number) {
    return this.http.get<Game>('http://localhost:8080/game/byID?id='+id);
  }
}
