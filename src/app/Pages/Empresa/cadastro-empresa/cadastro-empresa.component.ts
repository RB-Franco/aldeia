import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeOptions } from 'src/app/theme-options';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html'
})
export class CadastroEmpresaComponent implements OnInit {
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
