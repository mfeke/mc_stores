import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://streetfeverapi.vercel.app/api/category"
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
  deleteCategoryById(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteCategoryById/${id}`)
  }

}
