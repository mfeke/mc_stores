import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = ""
  constructor(private http: HttpClient) { }
  isCreateProduct(id:any,body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createProduct/${id}`, body)
  }
}
