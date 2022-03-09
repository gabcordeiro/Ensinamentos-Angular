import { Component, OnInit,Input,ViewChild,ElementRef,Output, 
EventEmitter
} from '@angular/core';

import { Funcionario } from 'src/classes/funcionario';
import {BancoFuncionarioDirectiveDirective} from '../shared/banco-funcionario-directive.directive';

@Component({
  selector: 'app-gui-viewpanel-funcionario',
  templateUrl: './gui-viewpanel-funcionario.component.html',
  styleUrls: ['./gui-viewpanel-funcionario.component.css']
})
export class GuiViewpanelFuncionarioComponent implements OnInit {

  constructor() { }

  @Input() nomeCompleto:string='';
  @Input() idade:string='';
  @Input() funcao:string='';
  @Input() foto:string='ssss';

  @Input() index:number=0;

  @ViewChild('deletarButton', {static: false}) deletarButton!: ElementRef;
  
  @Output() eventoDeletar = new EventEmitter();
  
  Deletar(){
    console.log(this.index);
    this.eventoDeletar.emit(this.index);
  }
  ngOnInit(): void {
  }

}
