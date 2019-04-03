import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';
import { Observable, of, Subject } from 'rxjs';


import { Item } from './item.model';


@Injectable()
export class ItemService {
SelectedItem: Item;
items : Item[];
readonly baseURL = 'http://localhost:3000/items';
  constructor(private http: HttpClient) {}
  
getProduct() {
  return this.http.get(this.baseURL);
  }
  
  
}
