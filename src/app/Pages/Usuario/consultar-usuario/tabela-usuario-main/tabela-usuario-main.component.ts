import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroUsuarioComponent } from '../../cadastro-usuario/cadastro-usuario.component';

@Component({
  selector: 'app-tabela-usuario-main',
  templateUrl: './tabela-usuario-main.component.html'
})
export class TabelaUsuarioMainComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroUsuarioComponent, {size:'lg'})
  }
}
