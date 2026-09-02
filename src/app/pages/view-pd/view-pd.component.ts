import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-view-pd',
  templateUrl: './view-pd.component.html',
  styleUrl: './view-pd.component.css'
})
export class ViewPdComponent {
  categories: any[] = []
  products:any[] = []
  

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe({

      next: data => {
        this.categories = data.categories
      }
    })

    this.productService.isGetAllProduct().subscribe({
      next:data=>{
        this.products = data
      }
    })
  }
}
