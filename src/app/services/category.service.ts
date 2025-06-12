import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://streetfeverapi.vercel.app/api/category"
  constructor(private http: HttpClient) { }

  getMainCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getMainCategory`)
  }
  getSubCategories(name: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getSubCategory/${name}`)
  }
  getAllCategories():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllCategory`)
  }


}
