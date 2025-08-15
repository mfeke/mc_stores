import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  path = '';
  ngOnInit(): void {
    this.path = window.location.pathname;
    console.log(this.path);
  }
}
