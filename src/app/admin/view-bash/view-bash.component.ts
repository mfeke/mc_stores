import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-view-bash',
  templateUrl: './view-bash.component.html',
  styleUrl: './view-bash.component.css'
})
export class ViewBashComponent {

  category = {
    name: "",
    status: false
  }
  mess:any
  categories: any[] = []
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.isGetAllCategories()
  }

  isGetAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: data => {
        this.categories = data
      }
    })
  }
  onOptionChange(value: any) {
    this.category.status = value;
    
  }

  isCreateCategory(){
    this.category.name = this.category.name.toLowerCase()
    this.categoryService.isCreateCategory(this.category).subscribe({
      next:data=>{

        this.mess = data.message

      }
    })
  }
}
