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
  detail = ""
  constructor(private apiService: ApiService, private categoryService: CategoryService) { }
  ngOnInit() {

    this.categoryService.getAllCategories().subscribe({
      next: data => {
        console.log(data)

        this.listNav  = data
      }
    })

  }

  more(category: any) {
    console.log(category)
    this.detail = category
  }


}
