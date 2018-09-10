import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qualit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

  template: `
  <button (click)="onClickMe()">Click me!</button>
  {{clickMessage}}`


})
export class HomeComponent implements OnInit {
  clickMessage = '';

  constructor() { }

  ngOnInit() {
  }


  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

}