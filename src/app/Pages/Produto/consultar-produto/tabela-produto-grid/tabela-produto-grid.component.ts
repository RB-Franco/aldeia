import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroProdutoComponent } from '../../cadastro-produto/cadastro-produto.component';



@Component({
  selector: 'app-tabela-produto-grid',
  templateUrl: './tabela-produto-grid.component.html'
})
export class TabelaProdutoGridComponent implements OnInit {

  closeResult: string;
  icone = "fa fa-eye fsize-2 btn-icon-wrapper";
  troca = true;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroProdutoComponent, {size:'lg'})
  }

  excluir(){
    
  }

  ChangeIcon(change: boolean){
    this.icone = change ? "fa fa-eye-slash fsize-2 btn-icon-wrapper": "fa fa-eye fsize-2 btn-icon-wrapper"; 
    this.troca = !change;
  }

}
