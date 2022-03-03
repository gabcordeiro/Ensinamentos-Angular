import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-component',
  templateUrl: './event-binding-component.component.html',
  styleUrls: ['./event-binding-component.component.css'],
  styles:[
    `
      .highlight{
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class EventBindingComponentComponent implements OnInit {

  constructor() { }

  valorSalvo:string='';
  frutas:number=8;
  textoDigitado:string='';
  isMouseOver:boolean=false;

  AdicionarFrutas(){
    this.frutas +=1;
    
  }

  RemoverFrutas(){
    this.frutas-=1;
    
  }

  OnKeyUp(evento:KeyboardEvent){
    this.textoDigitado=((<HTMLInputElement>evento.target).value);
  }

  OnMudarFrutas(evento:KeyboardEvent):void{
    this.frutas=((<HTMLInputElement>evento.target).valueAsNumber);
    console.log(this.frutas);
  }

  salvarValor(valor:string){
    this.valorSalvo=valor;
  } 

  OnMouseOverOut(){
    this.isMouseOver=!this.isMouseOver;
  }


  ngOnInit(): void {
  }

}
