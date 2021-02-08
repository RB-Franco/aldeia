import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeOptions } from 'src/app/theme-options';

@Component({
  selector: 'app-cadastro-catalogo',
  templateUrl: './cadastro-catalogo.component.html'
})
export class CadastroCatalogoComponent implements OnInit {
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
