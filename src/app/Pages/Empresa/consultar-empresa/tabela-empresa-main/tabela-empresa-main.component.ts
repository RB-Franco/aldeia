import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroEmpresaComponent } from '../../cadastro-empresa/cadastro-empresa.component';

@Component({
  selector: 'app-tabela-Empresa-main',
  templateUrl: './tabela-empresa-main.component.html'
})
export class TabelaEmpresaMainComponent implements OnInit {

  heading = 'Bootstrap 4 Tables';
  subheading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroEmpresaComponent, {size:'lg'})
  }
}
