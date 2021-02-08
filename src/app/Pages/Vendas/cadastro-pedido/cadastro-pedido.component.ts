import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html'
})
export class CadastroPedidoComponent implements OnInit {
  config: any;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  close(){    
  }

  Save(){
  }
}
