import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';;

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html'
})
export class CadastroClienteComponent implements OnInit {
  config: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  close(){
    this.modalService.dismissAll();
  }
  
  Save(){
    
  }
}
