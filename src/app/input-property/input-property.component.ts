import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-input',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  constructor() { }

  @Input('nome') nomeDecoretorInputCurso:string='';
  
  ngOnInit(): void {
  }

}
