import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email?:string

  
  err: boolean= false

  constructor(
    private authServices: AuthService,
    private tokenService: TokenService

  ){}
  submit(){
    let vail = isValidEmail(this.email)
    if(!this.email || vail === false ){

      this.err = true

      return 
    }
    this.authServices.login({email:this.email}).subscribe({
      next:(data) =>{
        

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
