import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {
  val1?: number
  val2?: number
  val3?: number
  val4?: number
  num?:any
  email?:any
  loading?: boolean = false
  list:any[] =[]
  constructor(
    private authService: AuthService,
    private tokenService: TokenService

  ) { }

  ngOnInit(){
    this.getUser()
  }

  getUser(){
    this.authService.getUser().subscribe({
      next:(data)=>{
        this.email = data.email
      }
    })
  }

  isVerifyCode(){

    this.authService
  }

  // Handles value changes and auto-advancing
  onInputChange(value: number, prevEl: HTMLInputElement | null, nextEl: HTMLInputElement | null): void {

    this.list.push(value)

    // 2. Move to next input if filled
    if (value && nextEl) {
      nextEl.focus();
    }
    if (!nextEl) {
      this.loading = true
      this.num = this.list.join()
    }
  }

  // Handles Backspace key movement
  onKeyDown(event: KeyboardEvent, prevEl: HTMLInputElement | null, currentEl: HTMLInputElement): void {
    if ((event.key === 'Backspace' || event.key === 'Delete') && !currentEl.value && prevEl) {
      prevEl.focus();
    }
  }
}
