import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroPedidoComponent } from '../../cadastro-pedido/cadastro-pedido.component';

@Component({
  selector: 'app-tabela-pedido-grid',
  templateUrl: './tabela-pedido-grid.component.html',
  styles: []
})
export class TabelaPedidoGridComponent implements OnInit {

  closeResult: string;
  icone = "fa fa-eye fsize-2 btn-icon-wrapper";
  troca = true;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroPedidoComponent, {size:'lg'})
  }

  excluir(){
    
  }

  ChangeIcon(change: boolean){
    this.icone = change ? "fa fa-eye-slash fsize-2 btn-icon-wrapper": "fa fa-eye fsize-2 btn-icon-wrapper"; 
    this.troca = !change;
  }

}
