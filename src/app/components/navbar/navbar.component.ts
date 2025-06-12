import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  name = "Makasana"
  listNav: any[] = []
  subCategory: any[] = []
  objNav: any
  detail = ""
  constructor(private apiService: ApiService, private categoryService: CategoryService) { }
  ngOnInit() {


    this.categoryService.getAllCategories().subscribe({
      next: data => {
        this.subCategory = data.categories
      }
    })
    this.categoryService.getMainCategories().subscribe({
      next: data => {
        this.listNav = data
        if (!this.objNav) {
          this.objNav = data[0]

        }
      }
    })

  }

  more(category: any) {
    this.detail = category
  }
  subcate(sub: any) {
    this.objNav = sub
  }

}
