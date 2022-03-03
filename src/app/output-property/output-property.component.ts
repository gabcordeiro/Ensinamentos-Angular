import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }


  @Input() valor:number=0;


  @Output() mudouValor = new EventEmitter();

  Incrementar(){
    this.valor++;
    this.mudouValor.emit({novoValor : this.valor});
  }
  Decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor : this.valor});
  }

  ngOnInit(): void {
  }

}
