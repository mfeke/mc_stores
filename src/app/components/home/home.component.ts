import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  url = "https://i.postimg.cc/TPs5DMhf/Home-col.jpg"
  title = "Categories"
  main = { name: "New in sport waves", image: "https://i.postimg.cc/mDbwwjHK/New-wave-racket-club.jpg", list: ["women's", "men's"] }
  products = [{ name: "POLO SHIRT", image: "https://i.postimg.cc/GtPTKkTn/shirt.jpg" },
  { name: "FLOWER GIRL'S", image: "https://i.postimg.cc/ZRDcHwMf/dress.jpg" },
  { name: "sunglasses", image: "https://i.postimg.cc/QNJhXsBH/395428262-738578591637520-6011826443595266178-n.jpg" },
  { name: "dresses", image: "https://i.postimg.cc/s2zMQ4r3/H-M-offers-fashion-and-quality-at-the-best-price-1.jpg" },
  ]
  gifts = ["https://i.postimg.cc/TwMxdgKg/Spring-lookbook-2023-H-M-2.jpg", "https://i.postimg.cc/QMJ47DFV/H-M-Innovation-Colour-Story-1.jpg",
    "https://i.postimg.cc/2SV20t08/289692778-2042713422564954-2810029918394298908-n.jpg"
    , "https://i.postimg.cc/cJf6ZsF9/299385009-2083351508501145-2012346897503920688-n.jpg"
  ]
 
}
