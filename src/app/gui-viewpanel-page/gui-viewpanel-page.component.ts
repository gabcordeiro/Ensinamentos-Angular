import { Component, OnInit } from '@angular/core';

import { Funcionario } from 'src/classes/funcionario';

import {BancoFuncionarioDirectiveDirective} from '../shared/banco-funcionario-directive.directive';
@Component({
  selector: 'app-gui-viewpanel-page',
  templateUrl: './gui-viewpanel-page.component.html',
  styleUrls: ['./gui-viewpanel-page.component.css']
})
export class GuiViewpanelPageComponent implements OnInit {

  constructor() { 
    this.bancoFuncionariosService=new BancoFuncionarioDirectiveDirective();
  }
  

  bancoFuncionarios:Funcionario[]=[];

  bancoFuncionariosService:BancoFuncionarioDirectiveDirective;
  
  

  RemoverFuncionario(index:number){
    this.bancoFuncionariosService.RemoverFuncionario(index);
  }

  AdicionarFuncionario(nomeCompletoInput:string,idadeInput:string,
    funcaoInput:string
    ){
      let novoFuncionario: Funcionario={nomeCompleto:nomeCompletoInput,
      funcao:funcaoInput,fotoUsuario:'http://lorempixel.com.br/400/400',
      idade:parseInt(idadeInput)
      }; 
      
      this.bancoFuncionariosService.AdicionarFuncionario
      (novoFuncionario);
      console.log(novoFuncionario);

  }

  ngOnInit(): void {
    this.bancoFuncionarios = this.bancoFuncionariosService.getBanco();
  }

}
