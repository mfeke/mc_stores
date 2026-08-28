import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ReplacePipe } from '../../pipes/replace.pipe';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrl: './dashborad.component.css'
})
export class DashboradComponent {
  categories: any[] = []
  selected?: string
  message?: any
  loading: boolean = false
  category = {
    name: ""
  }
  errCategory = {
    name: false
  }

  constructor(private categoryService: CategoryService) { }
  ngOnInit() {

    this.categoryService.getMainCategories().subscribe({
      next: data => {
        this.categories = data
      }
    })
  }

  isSelected(value: string) {
    this.selected = value

  }
  onInputChange(value: any): void {
    if (!value) {

      this.errCategory.name = true

    } else {
      this.errCategory.name = false
    }

  }

  // Handles Backspace key movement
  onKeyDown(event: KeyboardEvent): void {
    if ((event.key === 'Backspace' || event.key === 'Delete') && this.category.name === "") {
      this.errCategory.name = true
    }
  }
  isCreateSubCategory() {

    this.loading = true
    this.message = 10
    setTimeout(() => {
      console.log("This runs after 2 seconds");
    }, 5000);


    this.categoryService.isCreateSubCategory(this.selected,this.category).subscribe({
      next: data => {
        this.message = data.message
        this.loading = false
      },
      error: (err) => {
        this.message = err.error.message

        this.loading = false

      },
    })

  }
  isCreateCategory() {
    this.loading = true
    this.message = 20
    setTimeout(() => {

    }, 5000);


    this.categoryService.isCreateCategory(this.category).subscribe({
      next: data => {
        this.message = data.message
        this.loading = false
      },
      error: (err) => {
        this.message = err.error.message

        this.loading = false

      },
    })


  }
}
