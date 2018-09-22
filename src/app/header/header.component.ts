import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'qualit-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
   title = 'Qualificação';
  constructor() { }

  ngOnInit() {
  }

}
