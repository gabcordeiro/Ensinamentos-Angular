import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[
    `
      .text{
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
    
  
})
export class AppComponent {
  title = 'Treinamento Angular';
  deletarCiclo:boolean=false;
  valor:number=5;

  DeletarCiclo(){
    this.deletarCiclo=true;
  }

  OnMudarValor(){
    this.valor++;
  }
}
