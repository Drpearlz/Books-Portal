import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  focus: any;
  focus1: any;
  clickMessage: string;
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  constructor() { }

  ngOnInit() {
  }

}
