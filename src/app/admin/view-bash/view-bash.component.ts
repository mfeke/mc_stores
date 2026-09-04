import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-view-bash',
  templateUrl: './view-bash.component.html',
  styleUrl: './view-bash.component.css'
})
export class ViewBashComponent {

  categories:any[]= []
  constructor(
    private categoryService:CategoryService
  ){}

  ngOnInit(){
  this.isGetAllCategories()
  }

  isGetAllCategories(){
    this.categoryService.getAllCategories().subscribe({
      next:data=>{
        this.categories = data.categories




      }
    })
  }
}
