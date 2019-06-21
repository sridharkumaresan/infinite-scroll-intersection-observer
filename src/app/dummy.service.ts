import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://node-hnapi.herokuapp.com';

@Injectable({
  providedIn: 'root'
})

export class DummyServiceService {

  constructor(private http: HttpClient){

  }
  
  getLatestStories(page: number = 1) {
      console.log('Calling API....');
      return this.http.get(`${BASE_URL}/news?page=${page}`);
  }

}
