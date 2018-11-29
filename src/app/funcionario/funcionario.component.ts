import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LinguagemService } from './../services/linguagem.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'qualit-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],

  providers: [
    NgbModalConfig,
    NgbModal,
    LinguagemService,
  ]
})
export class FuncionarioComponent implements OnInit {

  linguagens = [];
  selectedLinguagem = null;


  constructor(config: NgbModalConfig, private modalService: NgbModal, private linguagemService: LinguagemService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    this.linguagens = this.linguagemService.getLinguagem();
  }

  open(content) {
    this.modalService.open(content);
  }

  selectLinguagem(linguagem) {
    // this.selectedLinguagem(linguagem);
    console.log(linguagem);
  }

  get selectLinguagemImagem() {
    return 'assets/html5.png';
  }

  ngOnInit() {
  }

}
