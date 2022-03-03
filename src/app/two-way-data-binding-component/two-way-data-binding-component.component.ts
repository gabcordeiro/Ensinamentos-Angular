import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-component',
  templateUrl: './two-way-data-binding-component.component.html',
  styleUrls: ['./two-way-data-binding-component.component.css']
})
export class TwoWayDataBindingComponentComponent implements OnInit {

  constructor() { }

  nome:string='abc';

  pessoa:any={
    nome:'joao',
    idade:20
  };

  valorInicial:number =15;
  nomeDoCurso:string='Angular';


  onMudouValor(evento:any){
    console.log(evento.novoValor);
  }

  ngOnInit(): void {
  }

}
