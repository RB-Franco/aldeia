import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroProdutoComponent } from '../../cadastro-produto/cadastro-produto.component';

@Component({
  selector: 'app-tabela-produto-main',
  templateUrl: './tabela-produto-main.component.html'
})
export class TabelaProdutoMainComponent implements OnInit {
  
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(CadastroProdutoComponent, {size:'lg'})
  }
}