import { Component, OnInit } from '@angular/core';

interface name {
  username: string;
  email: string;
  psw: string | number;
  cpsw: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allowButton = false;
  server=""
  constructor() {
    setTimeout(() => {
      this.allowButton = true;
    }, 2000);
  }
  
  userlist: name = {
    username: '',
    email: '',
    psw: '',
    cpsw: '',
  };
 data:name|string=""
 handleSubmit():void {
    this.data=this.userlist;
    console.log(this.data)
  }
 
  // public handleSubmit(event:any){
  //   console.log(event);
  // }

  ngOnInit(): void {}
}
