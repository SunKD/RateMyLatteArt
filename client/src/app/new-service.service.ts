import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor(private _httpClient: HttpClient) {
    this.getAllArts();
  }
  getAllArts(): any {
    return this._httpClient.get('/lattes');
  }

  addNewLatte(newLatte): any {
    console.log(newLatte);
    console.log("Add One!!!")
    return this._httpClient.post('/lattes', newLatte);
  }

  addNewComment(id:string, newComment): any {
    console.log(id);
    console.log(newComment);
    return this._httpClient.post('/lattes/' + id, newComment);
  }

  getLatte(id:String){
    return this._httpClient.get('/lattes/' + id);
  }

  getStuff() {
    console.log("got stuff");
    return this._httpClient.get('/lattes');
  }
}
