import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  url = "https://i.postimg.cc/TPs5DMhf/Home-col.jpg"
  title = "The Daily Grind Redefined"
  currentIndex = 1;

  list = [{
    title: "Simba NikNaks Cheese Flavoured Maize Snack 135g",
    img: "https://i.postimg.cc/fWdmv6k2/NIK-NAK-removebg-preview.png",
    price: 15.99
  },
  {
    title: "Coca-Cola Plastic 2L",
    img: "https://i.postimg.cc/Yq1vjsxJ/coca-cola-removebg-preview.png",
    price: 26.99
  },

  {
    title: "Blue Ribbon White Toaster Bread 700g",
    img: "https://i.postimg.cc/cJSWyGT9/bread-removebg-preview.png",
    price: 18.99
  }
  ]
  sub(): void {

    this.currentIndex--
  }
  add(): void {

    this.currentIndex++
  }
}
