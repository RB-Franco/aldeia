import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroCatalogoComponent } from '../../cadastro-catalogo/cadastro-catalogo.component';

@Component({
  selector: 'app-tabela-catalogo-main',
  templateUrl: './tabela-catalogo-main.component.html'
})
export class TabelaCatalogoMainComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    //this.modalService.open(CadastroCatalogoComponent, {size:'lg'})
  }
}
