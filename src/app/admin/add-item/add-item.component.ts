import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  
  editorControl = new FormControl('');
  colourList = [{
    name: ""
  }]
  sizeList?: any = [{
    name: "",
    unit: "",
    colour:""
  }]

  selectedImage: any
  categoryList: any[] = [{}]
  product: any = {}
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  selectedCategory: any[] = []
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {

    this.categoryService.getAllCategories().subscribe({
      next: data => {
        this.categoryList = data.categories
      }

    })

  }
  isSelectedImage(i: any) {

    this.selectedImage = i


  }
  isSelectedCategory(obj: any) {
    this.categoryList = this.categoryList.map(category =>
      category._id === obj._id
        ? { ...category, value: !category.value } // Toggle the clicked category
        : category // Leave other categories intact
    );
  }

  isSaveCategory() {

    this.selectedCategory = this.categoryList.filter(category => category.value === true)

  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const files: FileList = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Validate that the selected file is an image
      if (file.type.match(/image\/*/)) {
        this.selectedFiles.push(file);

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target?.result) {
            this.imagePreviews.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // Remove image from both preview and payload arrays
  removeImage(index: number): void {
    this.selectedImage = null
    this.imagePreviews.splice(index, 1);
    this.selectedFiles.splice(index, 1);
  }

  // Upload the files using FormData
  upload(): void {
    let id = "6a90fd50d919c7309c967879"
    const formData = new FormData();
    this.selectedFiles.forEach((file) => {
      formData.append('images', file);
    });
    formData.append('name', this.product.name)
    formData.append('price', this.product.price)
    formData.append('description', String(this.editorControl))
    formData.append('sizes', JSON.stringify(this.sizeList))
    formData.append('colours', JSON.stringify(this.colourList))
    this.productService.isCreateProduct(id, formData).subscribe({
      next: data => {

      },
      error: (err) => {


      },
    })

  }

  addColour() {
    let colour = {
      name: ""
    }
    this.colourList.push(colour)
  }
  addSize() {
    let size = {
      name: '',
      unit: ""

    }
    this.sizeList.push(size)
  }
  removeSize(index: any) {
    if (index !== 0) {
      this.sizeList = this.sizeList.filter((item: any, i: any) => i !== index)
    }
  }

  removeColour(index: any) {
    if (index !== 0) {
      this.colourList = this.colourList.filter((item, i) => i !== index);

    }
  }
  


}
