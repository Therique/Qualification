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

  funcionarios = [];

  constructor(private funcionarioService: FuncionarioService) {
    this.funcionarios = this.funcionarioService.getFuncionario();
   // console.log(this.funcionarioService.getFuncionario());
   }

  ngOnInit() {
  }

}
