import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear()
  }

  public saveToken(token: string): void {
    this.signOut();
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY)
  }
}
