import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {


   jwtb_url = "https://streetfeverapi.vercel.app/"

  constructor(private http: HttpClient) { }
  login(body: any): Observable<any> {
    return this.http.post(`${this.jwtb_url}api/auth/signin` ,body,
   httpOptions);
  }

}
