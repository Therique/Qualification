import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinguagemService {

  constructor() {
   }



getLinguagem() {
  return [
    {id: '1', nome: 'Angular', descricao: '', caminhoImagem: 'assets/html5.png' },
    {id: '2', nome: 'Java', descricao: '',  caminhoImagem: ''  },
    {id: '3', nome: 'C', descricao: '', caminhoImagem: '' },
    {id: '4', nome: 'C++', descricao: '', caminhoImagem: ''  },
    {id: '5', nome: 'Java', descricao: '', caminhoImagem: '' },
    {id: '6', nome: 'C', descricao: '',  caminhoImagem: ''  },
    {id: '7', nome: 'Angular', descricao: '',  caminhoImagem: ''  },
    {id: '8', nome: 'Java', descricao: '',  caminhoImagem: ''  },
    {id: '9', nome: 'C', descricao: '',  caminhoImagem: ''  },
    {id: '10', nome: 'Angular', descricao: '',  caminhoImagem: ''  },
    {id: '11', nome: 'Java', descricao: '',  caminhoImagem: ''  },
    {id: '12', nome: 'C', descricao: '',  caminhoImagem: ''  }
]; }


}
