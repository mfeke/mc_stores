import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

  user!:any
  constructor(
    private authService:AuthService
  ){}


  ngOnInit(){

    this.authService.getUser().subscribe({
      next:data=>{
      this.user = data
      }
    })

  }
  
}
