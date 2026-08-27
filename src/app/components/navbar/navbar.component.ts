import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
 cur= '/home'
  curUrl?:any
  navList:any[] = []
  constructor( 
    private router: Router ,
    private categoryService: CategoryService
  ) {}

  
  ngOnInit(){
    this.curUrl = this.router.url; 
    this.categoryService.getMainCategories().subscribe({
      next:data =>{
      
        this.navList = data
      }
    })

    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    
    // Check if the vertical scroll position is greater than 50px
    this.isScrolled = window.scrollY > 520;
  }

}
