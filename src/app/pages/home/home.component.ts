import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imageUrl = "https://i.postimg.cc/jdMnjtc4/20260901-083903-COLLAGE.jpg"
  imageUrl2 = "https://i.postimg.cc/V6nXSnT8/1786716684465-2.jpg"

  products = [
    
    {
      image :"https://i.postimg.cc/bwK1Tm1x/1786881238907.jpg",
      price: 3000 , 
      name:"7683 Shadow Warrior Advisors"},
      {
        image:"https://i.postimg.cc/k5pmph7L/1786706820373.jpg",
        price:4000,
        name:'7685 Shadow Warrior Utility Pant'
      }
  ]
}
