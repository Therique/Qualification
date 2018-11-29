import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() {

  }


  getFuncionario() {
    return [
      { id: '1', nome: 'Henrique', cpf: '015.876.104-93' },
      { id: '2', nome: 'Joanna', cpf: '015.876.104-93' },
      { id: '3', nome: 'Eliane', cpf: '015.876.104-93' }
    ];
  }

}