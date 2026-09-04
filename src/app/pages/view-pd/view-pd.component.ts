import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-view-pd',
  templateUrl: './view-pd.component.html',
  styleUrl: './view-pd.component.css'
})
export class ViewPdComponent {
  categories: any[] = []
  products: any[] = []
  category?: any
  col: any

  url?: any
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = this.route.snapshot.paramMap.get('name')
    this.isGetCatebyName()
    this.categoryService.getCategoryByName(this.url).subscribe({
      next: data => {
        this.category = data
      }
    })
    this.productService.isGetAllProduct().subscribe({
      next: data => {
        this.products = data
      }
    })
  }
  isCol(value: any) {

    this.col = value
  }
  isGetCatebyName() {
    this.categoryService.getSubCategories(this.url).subscribe({
      next: data => {
        this.categories = data
      }
    })

  }
}
