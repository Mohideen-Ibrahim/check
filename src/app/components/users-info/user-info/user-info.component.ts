import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    // age: null,
    // address: {
    //   street: '',
    //   city: '',
    //   state: ''
    // }
  };

  userInfoList: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showForm: boolean = true;
  data: any;
  @ViewChild('userForm') form: any;

  currentClasses = {};
  currentStyles = {};

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getData().subscribe(data => {
      console.log(data);
    });
   
    this.userService.getUsers().subscribe(users => {
      this.userInfoList = users;
      this.loaded = true;
    });
    // setTimeout(()=>{
      //   this.userInfoList = [
      //     {
      //     firstName: 'Mohideen',
      //     lastName: 'Faris',
      //     email: 'check@hotmail.com',
      //     // age:  29,
      //     // address:  {
      //     //   street: '78, North St',
      //     //   city: 'Tuticorin',
      //     //   state: 'TamilNadu'
      //     // },
      //     image: "http://lorempixel.com/600/600/people/1",
      //     isActive: true,  
      //     balance: 300,
      //     registered: new Date("10/03/2021 11:30:00"), 
      //     hide: true,
      //   },
      //   {
      //     firstName: 'Nagoor',
      //     lastName: 'Meeran',
      //     email: 'bcd@yahoo.com',
      //     // age:  25,
      //     // address:  {
      //     //   street: '8, South St',
      //     //   city: 'Tirunelveli',
      //     //   state: 'TamilNadu'
      //     // },
      //     image: "http://lorempixel.com/600/600/people/2",
      //     isActive: false,  
      //     balance: 200,
      //     registered: new Date("11/02/2021 10:30:00"),
      //     hide: false,   
      //   },
      //   {
      //     firstName: 'Raja',
      //     lastName: 'John',
      //     email: 'abc@gmail.com',
      //     // age:  31,
      //     // address:  {
      //     //   street: '7, North Car St',
      //     //   city: 'Madurai',
      //     //   state: 'TamilNadu'
      //     // },
      //     image: "http://lorempixel.com/600/600/people/3",
      //     isActive: true,
      //     balance: 100,
      //     registered: new Date("11/09/2021 08:30:00"),
      //     hide: true,
      //   }
      // ];
      // this.showExtended = false;
      // this.addUser(
      //   {
      //     firstName: 'Rafeeq',
      //     lastName: 'Raja'   
      //   }
      // );
      
    // },2000);

    this.setCurrentClasses();
    this.setCurrentStyles();   
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px',
    }
  }

  // addUser(){
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.userInfoList.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     // age: null,
  //     // address: {
  //     //   street: '',
  //     //   city: '',
  //     //   state: ''
  //     // }
  //   }
  // }

  // fireEvent(e){
  //   console.log("button clicked",e.type);    
  // }

  // toggleHide(user: User){
  //   user.hide = !user.hide;
  // }

  onSubmit({value,valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log("Form is not valid");
    }else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      // this.userInfoList.unshift(value);
      this.userService.addUser(value);
      this.form.reset();
    }
    console.log("submit");
    // e.preventDefault();
  }

}
