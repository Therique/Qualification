import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'qualit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  clickMessage = '';
  title = 'Qualificacão';
  router: any;

  constructor() { }


  listMe(){
  // alert('ABRE PORRA');
  this.router.navigate(['/funcionario']);
  
}

  ngOnInit() {
  }

}
