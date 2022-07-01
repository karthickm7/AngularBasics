import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-sample]',//attribute selector
  //selector: '.app-sample',//class selector
  selector: 'app-sample', //element  selector
  templateUrl: './sample.component.html',
  //template: '<app-home></app-home>',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  serverstatus: string | number = 'offline';
  serverid: number = 10;
  server = ['TestServer', 'TestServer2'];
  constructor() {
    this.serverstatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  //ngFor example
  showSecrete = false;
  logs:number[]=[];
  onToggleDetail() {
    this.showSecrete = !this.showSecrete;
    this.logs.push(this.logs.length + 1)
  }
  getServerStatus() {
    return this.serverstatus;
  }
  getColor() {
    return this.serverstatus === 'online' ? 'green' : 'red';
  }
  public toggleOn = true;
  ngOnInit(): void {}
}
