import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-view-bash',
  templateUrl: './view-bash.component.html',
  styleUrl: './view-bash.component.css'
})
export class ViewBashComponent {

  category: any = {}
  selectedCategory: { _id: string, name: string, status: boolean } | null = null;
  selectedIndex: number = -1;
  mess!: any 
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



  isCreateCategory() {
    this.category.name = this.category.name.toLowerCase()
    this.categoryService.isCreateCategory(this.category).subscribe({
      next: data => {

        this.mess = data.message

      }
    })
  }
  pass(value: any) {
    this.category = value

  }
  passEdit(i: any) {

    this.selectedIndex = i;
    this.selectedCategory = { ...this.categories[i] };

    //this.newCate = this.categories.find(category => category._id === id)
  }

  isUpdate(status: any, name: string) {
    

    this.categories = this.categories.map((category, index) => {

      if (index === this.selectedIndex && status === 'true') {
        
        return { ...category, name: name, status: true }
      } else if (index === this.selectedIndex && status === 'false') {
        return { ...category, name: name, status: false }
      }
      return category
    })

    let cate = {
      name,
      status
    }

    let id = this.selectedCategory?._id
    this.cancelEdit()

    this.categoryService.updateCategoryById(id, cate).subscribe({
      next: data => {
        this.mess = data.message
      },
      error: (err) => {

        this.mess = err.error?.message || err.message


      },

    })
  }
  isSelectedCategory(obj: any) {
    this.selectedCategory = obj
  }
  createSubCate(){

    this.mess = 22
    this.category.name = this.category.name.toLowerCase()
    this.categoryService.isCreateSubCategory(this.selectedCategory?._id, this.category).subscribe({
      next:data=>{
        this.mess = data.message

      }
    })
  }


  cancelEdit() {
    this.selectedCategory = null;
    this.selectedIndex = -1;
  }

  isDelete(value: any) {

    this.categories = this.categories.filter(item => item._id !== value._id)
    this.categoryService.deleteCategoryById(value._id).subscribe({
      next: data => {
        this.mess = data.message
      }
    })
  }

}
