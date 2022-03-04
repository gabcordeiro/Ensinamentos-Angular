import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  constructor() { }

  cursos:string[]=[];

  mostrarCursos:boolean=false;

  OnMostrarCursos(){
    this.mostrarCursos=!this.mostrarCursos;
  }
  ngOnInit(): void {
  }

}
