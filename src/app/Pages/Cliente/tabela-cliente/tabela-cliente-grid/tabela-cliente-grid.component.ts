import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroClienteComponent } from '../../cadastro-cliente/cadastro-cliente.component';



@Component({
  selector: 'app-tabela-cliente-grid',
  templateUrl: './tabela-cliente-grid.component.html',
  styles: []
})
export class TabelaClienteGridComponent implements OnInit {

  icone = "fa fa-eye fsize-2 btn-icon-wrapper";
  troca = true;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroClienteComponent, {size:'lg'})
  }

  excluir(){
    
  }

  ChangeIcon(change: boolean){
    this.icone = change ? "fa fa-eye-slash fsize-2 btn-icon-wrapper": "fa fa-eye fsize-2 btn-icon-wrapper"; 
    this.troca = !change;
  }

}
