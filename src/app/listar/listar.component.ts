import { Component, OnInit } from '@angular/core';


import { FuncionarioService } from './../services/funcionario.service';

@Component({
  selector: 'qualit-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],

  providers: [
    FuncionarioService,
  ]
})
export class ListarComponent implements OnInit {

  searchFilter = '';
  funcionarios: any[];


  constructor(
    private funcionarioService: FuncionarioService) {

    //  this.funcionarios = this.funcionarioService.listAll(this.searchFilter);
  }



  ngOnInit() {
    this.funcionarioList();
  }


  get funcionarioList() {

    return this.funcionarioService.listAll(this.searchFilter);
  }



}
