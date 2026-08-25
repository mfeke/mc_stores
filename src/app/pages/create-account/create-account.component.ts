import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  user = {
    firstName: "",
    lastName: "",
    email: "",
    pass: ""
  }
  loading:boolean = false
  errMess = {
    firstName: false,
    lastName: false,
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
    if (!this.user.lastName) {
      this.errMess.firstName = true
    }
    if (!this.user.lastName) {
      this.errMess.lastName = true
    }
    if (!this.user.email || !vail) {

      this.errMess.email = true
    }


    if (!this.user.pass) {
      this.errMess.pass = true
      return

    }

    this.loading = true

    this.authServices.isCreateAccount(this.user).subscribe({
      next: data => {
        if (data) {
          this.tokenService.saveToken(data.accessToken)
          this.router.navigate([`vc/${data.id}`])
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
    if (this.user.pass) {
      this.errMess.pass = false

    }


  }

}
function isValidEmail(email: any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
