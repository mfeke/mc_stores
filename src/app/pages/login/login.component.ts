import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email?:string
  loading: boolean= false
  
  err: boolean= false

  constructor(
    private authServices: AuthService,
    private tokenService: TokenService,
    private router:Router

  ){}
  submit(){
    let vail = isValidEmail(this.email)
    if(!this.email || vail === false ){

      this.err = true

      return 
    }
    this.authServices.login({email:this.email}).subscribe({
      next:(data) =>{
        this.tokenService.saveToken(data.accessToken)
        this.router.navigate([`/vc/${data.id}`])
      }
    })
  }
  changEmail(){
   if (this.email){
    this.err = false 
    return 
   }
    
  }
}
function isValidEmail(email:any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
      }
