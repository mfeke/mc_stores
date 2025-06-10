import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const headers = new HttpHeaders()
  .append('X-Rapidapi-Key', '26a219aecbmsh2cd5758a9c661d3p1f46d6jsnd15311dadbc9')
  .append('X-Rapidapi-Host', 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com')
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com"
  constructor(private http: HttpClient) { }

  // getAllCategories(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/categories/list?lang=en&country=au`, { headers })
  // }
  getSubCatgory(name:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categories/list?lang=en&country=au`, { headers })
  }

}
