import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "http://localhost:3000/api/category"
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllCategory`)
  }
  getSubCategories(name: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getSubCategory/${name}`)
  }


}
