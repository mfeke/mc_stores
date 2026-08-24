import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
//const token 



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private jwtb_url = "https://streetfeverapi.vercel.app/"

  constructor(
    private http: HttpClient,
    private tokenService: TokenService

  ) { }
  login(body: any): Observable<any> {
    return this.http.post(`${this.jwtb_url}api/auth/signup`, body,
      httpOptions);
  }

  getUser(): Observable<any> {
    let token = this.tokenService.getToken()

    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'x-access-token': `${token}`
      })
    }


    return this.http.get(`${this.jwtb_url}api/auth/getUser`, httpOption)
  }
  isVerifyCode(code:any):Observable<any> {
    let token = this.tokenService.getToken()

    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': `${token}`
      })
    }

    return this.http.get(`${this.jwtb_url}api/verify/getCode/${code}`, httpOption)
  }
}
