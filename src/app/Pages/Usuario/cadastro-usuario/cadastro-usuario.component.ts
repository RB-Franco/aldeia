import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html'
})
export class CadastroUsuarioComponent implements OnInit {
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
