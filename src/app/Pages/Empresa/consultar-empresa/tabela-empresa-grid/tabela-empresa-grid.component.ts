import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CadastroEmpresaComponent } from '../../cadastro-empresa/cadastro-empresa.component';



@Component({
  selector: 'app-tabela-empresa-grid',
  templateUrl: './tabela-empresa-grid.component.html',
  styles: []
})
export class TabelaEmpresaGridComponent implements OnInit {

  closeResult: string;
  icone = "fa fa-eye fsize-2 btn-icon-wrapper";
  troca = true;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroEmpresaComponent, {size:'lg'})
  }


  excluir(){
    
  }

  ChangeIcon(change: boolean){
    this.icone = change ? "fa fa-eye-slash fsize-2 btn-icon-wrapper": "fa fa-eye fsize-2 btn-icon-wrapper"; 
    this.troca = !change;
    
    // if(change){
    //   this.troca=false;
    //   this.icone = "fa fa-eye-slash fsize-2 btn-icon-wrapper";    
    // }else{
    //   this.troca=true;
    //   this.icone = "fa fa-eye fsize-2 btn-icon-wrapper"; 
    // }
    
  }

}
