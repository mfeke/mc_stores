import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
mess!:any
  email!: any
  user:any = {
    email: "",
    password: ""
  }
  loading: boolean = false

  errShow: boolean = false
  succShow:boolean = false
  errEmail: boolean = false
  errPass: boolean = false
  constructor(
    private authServices: AuthService,
    private tokenService: TokenService,
    private router: Router

  ) { }
  submit() {

    let vail = isValidEmail(this.user.email)


    if (!this.user.email || !vail) {

      this.errEmail = true
    }


    if (!this.user.password) {
      this.errPass = true
      return

    }
    this.mess = 44

    
    this.authServices.isLogin(this.user).subscribe({
      next: data => {
        if (data) {
          this.succShow =true

          this.mess = data.fullName
          this.tokenService.saveToken(data.accessToken)
          this.router.navigate([`store/admin/dashboard`])
        }
      },
      error: (err:HttpErrorResponse) => {
        this.errShow = true
        this.mess = err.error?.message

        
      },
    })
  }
  isChangeOn() {
    if (this.user.email) {
      this.errEmail = false

    }
    if (!this.user.email) {

      this.errEmail = true

    }
  }
  isChangePass() {
    if (this.user.password) {
      this.errPass = false

    }


  }

}
function isValidEmail(email: any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
