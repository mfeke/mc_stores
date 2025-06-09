import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  categoryList: any[] = []
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSubCategory()
  }
  getSubCategory(): void {
    const name = this.route.snapshot.paramMap.get("name")

    console.log(name)
    this.categoryService.getSubCategories(name).subscribe({
      next: data => {
        console.log(data)

        this.categoryList = data
      }
    })
  }

}
