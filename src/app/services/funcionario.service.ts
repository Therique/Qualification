import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';


interface FuncionarioResponse {
  funcionariosPreenchido: any[];
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private url = 'http://localhost:8080/funcionario';
   funcionarios = new BehaviorSubject<any[]>([]);
  funcionarios: any;


  constructor(private http: HttpClient) {
  }

  getFuncionario() {
    return [

      {
        id: '1', name: 'Joanna', cpf: '01587610493', rg: '7874309', orgaoExpeditor: 'SDS',
        DataNascimento: '1991-03-02', sexo: 'Masculino', nomeMae: 'ELiane', nomePai: 'Eliane',
        endereco: 'rua mano', cep: '54280120', estado: 'PE', cidade: 'recife', bairro: 'sucupira',
        email: 'thenrique', telefone: '952578223', celular: '95257823'
      }
    ];
  }

  listAll(searchFilter) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<FuncionarioResponse>(`${this.url}`, {headers})
      .subscribe(
        response => {
        return response.funcionariosPreenchido.filter(funcionarios => {
          return funcionarios.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1;
          });
        this.funcionarios.next(response.funcionariosPreenchido);
        }
      );
  }



}
