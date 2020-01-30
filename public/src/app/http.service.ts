import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAlgos() {
    return this._http.get('/api/algos');
  }

  createAlgo(newPet) {
    console.log(newPet);
    return this._http.post('/api/algos', newPet);
  }

  deleteAlgo(algoToDelete) {
    return this._http.delete(`/api/algos/${algoToDelete._id}`);
  }
}
