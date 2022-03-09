import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  constructor() { }

  livro:any={
    titulo:'Aprendendo Javascript',
    rating:4.53213,
    numeroPaginas:314,
    preco:44.99,
    dataLancamento: new Date(2016,5,24),
    url:'http://a.com/glqjpRP'
  }
  
  ngOnInit(): void {
  }

}
