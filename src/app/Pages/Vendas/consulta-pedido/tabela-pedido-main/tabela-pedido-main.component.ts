import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroPedidoComponent } from '../../cadastro-pedido/cadastro-pedido.component';

@Component({
  selector: 'app-tabela-pedido-main',
  templateUrl: './tabela-pedido-main.component.html'
})
export class TabelaPedidoMainComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    this.modalService.open(CadastroPedidoComponent, {size:'lg'})
  }
}
