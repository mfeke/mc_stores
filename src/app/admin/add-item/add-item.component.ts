import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  @ViewChild('editor') editor!: ElementRef<HTMLDivElement>;
  @Input() placeholder: string = 'Start typing your content here...';
  @Output() contentChange = new EventEmitter<string>();
  colourList = [{
    name: ""
  }]
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  constructor( 
    private productService: ProductService
  ) { }
  format(command: string): void {
    document.execCommand(command, false);
    this.editor.nativeElement.focus();
    this.onInput();
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

    this.productService.isCreateProduct(id, formData).subscribe({
      next:data=>{

      },
      error:(err) =>{
        
        
      },
    })
    
  }

  addColour() {
    let colour = {
      name: ""
    }
    this.colourList.push(colour)
  }
  removeColour(index: any) {
    if (index !== 0) {
      this.colourList = this.colourList.filter((item, i) => i !== index);

    }
  }
  onInput(): void {
    const htmlContent = this.editor.nativeElement.innerHTML;
    this.contentChange.emit(htmlContent);
  }

  
}
