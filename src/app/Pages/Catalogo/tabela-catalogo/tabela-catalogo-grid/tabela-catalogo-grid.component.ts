import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroCatalogoComponent } from '../../cadastro-catalogo/cadastro-catalogo.component';



@Component({
  selector: 'app-tabela-catalogo-grid',
  templateUrl: './tabela-catalogo-grid.component.html',
  styles: []
})
export class TabelaCatalogoGridComponent implements OnInit {

  icone = "fa fa-eye fsize-2 btn-icon-wrapper";
  troca = true;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    //this.modalService.open(CadastroCatalogoComponent, {size:'lg'})
  }

  excluir(){
    
  }

  ChangeIcon(change: boolean){
    this.icone = change ? "fa fa-eye-slash fsize-2 btn-icon-wrapper": "fa fa-eye fsize-2 btn-icon-wrapper"; 
    this.troca = !change;
  }

}
