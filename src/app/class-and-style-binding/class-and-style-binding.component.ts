import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-and-style-binding',
  templateUrl: './class-and-style-binding.component.html',
  styleUrls: ['./class-and-style-binding.component.css']
})
export class ClassAndStyleBindingComponent implements OnInit {

  constructor() { }

  url:string='alguma string';

  urlImagem:string='http://lorempixel.com.br/400/200';
  
  getValor(){
    return 1;
  }

  ngOnInit(): void {
  }

}
