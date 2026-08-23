import { Component } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {
val1: string = '';
  val2: string = '';
    val3: string = '';

      // Handles value changes and auto-advancing
        onInputChange(value: string, prevEl: HTMLInputElement | null, nextEl: HTMLInputElement | null): void {
            // 1. Enforce numeric input
                if (isNaN(Number(value))) {
                      // Clear value if non-numeric (handled via ngModel binding in target element)
                            return;
                                }

                                    // 2. Move to next input if filled
                                        if (value && value.trim() !== '' && nextEl) {
                                              nextEl.focus();
                                                  }
                                                    }

                                                      // Handles Backspace key movement
                                                        onKeyDown(event: KeyboardEvent, prevEl: HTMLInputElement | null, currentEl: HTMLInputElement): void {
                                                            if ((event.key === 'Backspace' || event.key === 'Delete') && !currentEl.value && prevEl) {
                                                                  prevEl.focus();
                                                                      }
                                                                        }
}
