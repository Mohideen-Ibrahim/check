import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users = [{
      firstName: 'Mohideen',
      lastName: 'Faris',
      email: 'check@hotmail.com',
      image: "http://lorempixel.com/600/600/people/1",
      isActive: true,  
      registered: new Date("10/03/2021 11:30:00"), 
      hide: true,
    },
    {
      firstName: 'Nagoor',
      lastName: 'Meeran',
      email: 'bcd@yahoo.com',     
      image: "http://lorempixel.com/600/600/people/2",
      isActive: false,  
      registered: new Date("11/02/2021 10:30:00"),
      hide: false,   
    },
    {
      firstName: 'Raja',
      lastName: 'John',
      email: 'abc@gmail.com',     
      image: "http://lorempixel.com/600/600/people/3",
      isActive: true,
      registered: new Date("11/09/2021 08:30:00"),
      hide: true,
    }
  ];
  }

  addUser(user: User){
    this.users.unshift(user);
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getData(){
    this.data = new Observable( observer => {
        setTimeout(()=> {
          observer.next(1);
        },1000);
        setTimeout(()=> {
          observer.next(2);
        },2000);
        setTimeout(()=> {
          observer.next(3);
        },3000);
        setTimeout(()=> {
          observer.next(4);
        },4000);        
    });
    return this.data;
  }
}
