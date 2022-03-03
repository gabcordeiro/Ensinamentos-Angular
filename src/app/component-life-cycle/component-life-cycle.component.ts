import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './component-life-cycle.component.html',
  styleUrls: ['./component-life-cycle.component.css']
})
export class ComponentLifeCycleComponent implements OnInit {



  @Input() valorInicial:number=10;

  constructor() { 
    console.log("constructor");
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
