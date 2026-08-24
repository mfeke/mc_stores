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
  num?: any
  email?: any
  loading?: boolean = false
  list: any[] = []
  constructor(
    private authService: AuthService,
    private tokenService: TokenService

  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.authService.getUser().subscribe({
      next: (data) => {
        if (data) {
          this.email = maskEmail(data.email)
        }
      }
    })
  }

  isVerifyCode(value: number) {

    this.authService.isVerifyCode(value).subscribe({
      next: (data) => {

        

      },
      error: (err) => {
        this.num = 'Failed to load data. Please try again.' + err.message;
        console.error('An error occurred:', err); // Inspect HttpErrorResponse here
      },
    })
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
      
      let code = Number(this.list.join(''))
      this.isVerifyCode(code)
    }
  }

  // Handles Backspace key movement
  onKeyDown(event: KeyboardEvent, prevEl: HTMLInputElement | null, currentEl: HTMLInputElement): void {
    if ((event.key === 'Backspace' || event.key === 'Delete') && !currentEl.value && prevEl) {
      prevEl.focus();
    }
  }
}

function maskEmail(email: any) {
  // Split the email into the local part and domain
  const [name, domain] = email.split('@');

  if (!domain || name.length <= 6) {
    return email; // Return as-is if too short or invalid
  }

  const first3 = name.slice(0, 3);
  const last3 = name.slice(-3);
  const maskedMiddle = '***';

  return `${first3}${maskedMiddle}${last3}@${domain}`;
}

