import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../app/models/Game';
import { AddGameViewModel } from './pages/addgame/addgame.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllGames() {
    return this.http.get<Game[]>('http://94.212.66.96:8080/game/all');
  }

  getGamebyID(id:number) {
    return this.http.get<Game>('http://94.212.66.96:8080/game/byID?id='+id);
  }
  
  uploadImage(image:File) {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', image, image.name);
    return this.http.post('http://94.212.66.96:8080/game/uploadImage', uploadImageData, { observe: 'response' });
  }

  uploadGame(model:AddGameViewModel) {
    return this.http.post<any>('http://94.212.66.96:8080/game/addGame', model);
  }

}
