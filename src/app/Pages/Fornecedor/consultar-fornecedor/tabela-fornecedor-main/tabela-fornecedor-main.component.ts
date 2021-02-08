import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroFornecedorComponent } from '../../cadastro-fornecedor/cadastro-fornecedor.component';

@Component({
  selector: 'app-tabela-fornecedor-main',
  templateUrl: './tabela-fornecedor-main.component.html'
})
export class TabelaFornecedorMainComponent implements OnInit {

  heading = 'Bootstrap 4 Tables';
  subheading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroFornecedorComponent, {size:'lg'})
  }
}
