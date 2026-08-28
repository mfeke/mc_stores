import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';


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
  


  format(command: string): void {
    document.execCommand(command, false);
    this.editor.nativeElement.focus();
    this.onInput();
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
