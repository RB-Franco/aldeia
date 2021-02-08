import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html'
})
export class CadastroProdutoComponent implements OnInit {
  config: any;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  close(){
    this.modalService.dismissAll();
  }
  Save(){
    
  }
}
