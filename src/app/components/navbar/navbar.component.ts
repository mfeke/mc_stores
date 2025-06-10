import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  show: boolean = false
  name = "Makasana"
  listNav: any[] = []
  constructor(private apiService: ApiService) { }
  ngOnInit() {

  }
  close() {
    this.show = !this.show

  }

}
