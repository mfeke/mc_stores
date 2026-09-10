import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  mess!:any
  user = {
    fullName: "",
    email: "",
    roles:['admin'],
    password: ""
  }
  loading: boolean = false
  errMess = {
    fullName: false,
    email: false,
    pass: false
  }
  errShow: boolean = false

  constructor(

    private authServices: AuthService,
    private tokenService: TokenService,
    private router: Router

  ) { }
  submit() {

    let vail = isValidEmail(this.user.email)
  
    if (!this.user.fullName) {
      this.errMess.fullName = true
    }
    if (!this.user.email || !vail) {

      this.errMess.email = true
    }


    if (!this.user.password) {
      this.errMess.pass = true
      return

    }

    this.loading = true

    this.authServices.isCreateAccount(this.user).subscribe({
      next: data => {
        if (data) {
          this.mess = data.message
          //this.tokenService.saveToken(data.accessToken)
         // this.router.navigate([`vc/${data.id}`])
        }
      },
      error: (err) => {
        if (err.status === 400) {

          
          this.loading = false
          this.errShow = true

        }
      },
    })
  }
  isChangeOn() {
    if (this.user.email) {
      this.errMess.email = false

    }
    if (!this.user.email) {

      this.errMess.email = true

    }
  }
  isChangePass() {
    if (this.user.password) {
      this.errMess.pass = false

    }


  }

}
function isValidEmail(email: any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
                                                                                                                                                                                                                                                                                                    

