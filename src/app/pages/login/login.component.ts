import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email?:string

  message:any
  err: boolean= false

  ngOnInit(){

  }
  submit(){
    let vail = isValidEmail(this.email)
    if(!this.email || vail === false ){

      this.err = true

      return 
    }
    this.message = isValidEmail(this.email)
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
