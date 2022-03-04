import { Directive, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[fundoAmarelo]'
})
export class FundoAmareloDirective {
  
  constructor(private _elementRef: ElementRef,
    private renderer:Renderer2
    ) {
      this.renderer.setStyle(this._elementRef.nativeElement,'background-color','yellow');
    //console.log(this._elementRef);
    //evitar this._elementRef.nativeElement.style.backgroundColor='yellow';
   }

}
