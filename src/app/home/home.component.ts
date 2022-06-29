import { Component, OnInit } from '@angular/core';

interface name {
  username:string,
  email:string,
  psw:string|number,
  cpsw:string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
 public userlist:name={
  username:"",
  email:"",
  psw:"",
  cpsw:""
 }
 public handlesubmit():void{
   console.log(this.userlist)
 }
  ngOnInit(): void {
  }

}
