import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-view-bash',
  templateUrl: './view-bash.component.html',
  styleUrl: './view-bash.component.css'
})
export class ViewBashComponent {

  category:any  = {
    
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
  pass(value:any){
    this.category = value

  }

  isUpdate(){
    this.mess = 12

    
    
    this.categoryService.updateCategoryById(this.category._id,this.category).subscribe({
      next:data=>{
        this.mess = data.message
      },
      error:(err) =>{

        this.mess = err.error.message;
        
        
      },
      
    })
  }

  isDelete(value:any){
    this.mess = 23
    this.categoryService.deleteCategoryById(value).subscribe({
      next:data=>{
        this.mess = data.message
      }
    })
  }
}
