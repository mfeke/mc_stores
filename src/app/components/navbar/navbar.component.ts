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
        console.log(data.categories)
        this.subCategory = data.categories
      }
    })
    this.categoryService.getMainCategories().subscribe({
      next: data => {
        this.listNav = data
        if (!this.objNav) {
          this.objNav = data[0]

        }
        console.log(this.objNav)
      }
    })

  }

  more(category: any) {
    this.detail = category
  }
  subcate(sub: any) {

    this.objNav = sub

  }
  getParentCategory(child: any) {
    if (!child.parent_id?.length) return null;
    return this.subCategory.find(cat => child.parent_id.includes(cat._id));
  }
}
