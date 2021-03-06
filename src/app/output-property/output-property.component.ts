import { Component, Input, OnInit,EventEmitter, Output, ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }


  @Input() valor:number=0;


  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', {static: false}) campoValorInput!: ElementRef;

  

  Incrementar(){
    console.log(this.campoValorInput);
    this.valor++;
    this.mudouValor.emit({novoValor : this.valor});
  }
  Decrementa(){
    console.log(this.campoValorInput);
    this.valor--;
    this.mudouValor.emit({novoValor : this.valor});
  }

  ngOnInit(): void {
  }

}
