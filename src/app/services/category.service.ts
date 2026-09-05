import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://vigilant-space-dollop-pgr9ppg9pqqh7qg9-2080.app.github.dev/api/category"
  constructor(private http: HttpClient) { }
  isCreateCategory(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createCategory`, body)
  }
  isCreateSubCategory(id: any, body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createSubCategory/${id}`, body)
  }

  getMainCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getMainCategory`)
  }
  getSubCategories(name: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getSubCategory/${name}`)
  }
  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllCategory`)
  }

  getCategoryByName(name: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/getCategoryByName/${name}`)

  }

  updateCategoryById(id:any,body:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/updateCategoryById/${id}`, body)
  }

}
