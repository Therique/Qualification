import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'qualit-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],

  providers: [NgbModalConfig, NgbModal]
})
export class FuncionarioComponent implements OnInit {
  liguagens = ['Angular', 'Java', 'C', 'C++', 'Python', 'C#', 'JavaScript', 'Visual Basic .NET', 'R',
    'PHP', 'MATLAB', 'Swift', 'Objective-C', 'Assembly', 'Perl', 'Ruby', 'Delphi / Object Pascal', 'Go', 'Scratch',
    'PL/SQL',
    'Visual Basic'
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

}
