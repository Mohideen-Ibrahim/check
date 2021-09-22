import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;  

  constructor() {
    this.user = {
      firstName: 'Mohideen',
      lastName: 'Faris',
      email: 'abnc@net.com'
      // age:  29,
      // address:  {
      //   street: '78, North St',
      //   city: 'Tuticorin',
      //   state: 'TamilNadu'
      // }    
    }
  }

  ngOnInit() {
  }
}



