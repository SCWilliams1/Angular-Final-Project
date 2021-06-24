import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private _productURL = 'assets/baseline.json';


  getUsers() {
    return this.http.get(this._productURL)
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
  /*
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getProducts() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getProduct(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }*/
}
