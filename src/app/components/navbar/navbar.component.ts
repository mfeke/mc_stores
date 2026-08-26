import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
 cur= '/home'
  curUrl?:any
  constructor( private router: Router ) {}
  
  ngOnInit(){
    this.curUrl = this.router.url; 
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    
    // Check if the vertical scroll position is greater than 50px
    this.isScrolled = window.scrollY > 520;
  }

}
