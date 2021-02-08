import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroUsuarioComponent } from '../../cadastro-usuario/cadastro-usuario.component';

@Component({
  selector: 'app-tabela-usuario-grid',
  templateUrl: './tabela-usuario-grid.component.html',
  styles: []
})
export class TabelaUsuarioGridComponent implements OnInit {

  closeResult: string;
  icone = "fa fa-eye fsize-2 btn-icon-wrapper";
  troca = true;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroUsuarioComponent, {size:'lg'})
  }

  excluir(){
    
  }

  ChangeIcon(change: boolean){
    this.icone = change ? "fa fa-eye-slash fsize-2 btn-icon-wrapper": "fa fa-eye fsize-2 btn-icon-wrapper"; 
    this.troca = !change;
  }

}
