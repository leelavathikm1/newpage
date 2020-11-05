import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  allData = {};
  constructor(private _http: HttpClient) {}
  getData() {
    return this._http.get('http://www.mocky.io/v2/5daffe6d2f00001172c1374b');
  }
  setData(data) {
    this.allData = data;
  }
  getAllData() {
    return this.allData['pugs'];
  }
}
