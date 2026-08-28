import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../Environment/environment.local';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductslistService {

  constructor(private _HttpClient:HttpClient) { 
  }
  getProducts = ():Observable<any>=>{
    return this._HttpClient.get(baseUrl +'api/v1/products');
  }
}
