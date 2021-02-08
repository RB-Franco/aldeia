import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroClienteComponent } from '../../cadastro-cliente/cadastro-cliente.component';

@Component({
  selector: 'app-tabela-cliente-main',
  templateUrl: './tabela-cliente-main.component.html'
})
export class TabelaClienteMainComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroClienteComponent, {size:'lg'})
  }
}
