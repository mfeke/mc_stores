import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://streetfeverapi.vercel.app/api/product"
  constructor(private http: HttpClient) { }
  isCreateProduct(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createProduct/`, body)
  }
  isGetAllProduct():Observable<any>{
    
    return this.http.get(`${this.apiUrl}/getAllProduct`)
  }
}
