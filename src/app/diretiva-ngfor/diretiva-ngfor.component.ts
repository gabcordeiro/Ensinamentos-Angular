import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  constructor() { }




  cursos: string[]=["Angular 2","Java","C#"];
  ngOnInit(): void {
  }

}
