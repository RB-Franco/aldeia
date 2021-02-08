import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroFornecedorComponent } from '../../cadastro-fornecedor/cadastro-fornecedor.component';



@Component({
  selector: 'app-tabela-fornecedor-grid',
  templateUrl: './tabela-fornecedor-grid.component.html',
  styles: []
})
export class TabelaFornecedorGridComponent implements OnInit {

  icone = "fa fa-eye fsize-2 btn-icon-wrapper";
  troca = true;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroFornecedorComponent, {size:'lg'})
  }


  excluir(){
    
  }

  ChangeIcon(change: boolean){
    this.icone = change ? "fa fa-eye-slash fsize-2 btn-icon-wrapper": "fa fa-eye fsize-2 btn-icon-wrapper"; 
    this.troca = !change;    
  }

}
