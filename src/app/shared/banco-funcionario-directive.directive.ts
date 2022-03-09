import { Directive } from '@angular/core';

import { Funcionario } from 'src/classes/funcionario';

@Directive({
  selector: '[appBancoFuncionarioDirective]'
})
export class BancoFuncionarioDirectiveDirective {


  public bancoFuncionarios:Funcionario[]=[
    {nomeCompleto:'Gabriel Cordeiro',idade:22,fotoUsuario:'http://lorempixel.com.br/400/400',funcao:'Chefe'},
    {nomeCompleto:'Iago Martins',idade:32,fotoUsuario:'http://lorempixel.com.br/400/400',funcao:'Funcionario'},
    {nomeCompleto:'Chupa Rola',idade:45,fotoUsuario:'http://lorempixel.com.br/400/400',funcao:'Otario'},
  ];

  RemoverFuncionario(index:number){
    console.log('deletando item index: '+index)
    this.bancoFuncionarios.splice(index,1);
  }

  AdicionarFuncionario(funcionarioMetodo:Funcionario
    ){

      this.bancoFuncionarios.push(funcionarioMetodo);
      
  }
  getBanco(){
    return this.bancoFuncionarios;
  }

  constructor() {

   }

}
