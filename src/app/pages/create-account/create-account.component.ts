import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
 user = {
  firstName:"",
  lastName:"",
  email:"",
  pass:""
 }
 errMess = {
  firstName: false,
  lastName:false,
  email:false,
  pass:false
 }
}
