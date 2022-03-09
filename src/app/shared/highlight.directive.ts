import { Directive ,ElementRef,Renderer2,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private backgroundColor:string='';
  @HostBinding('style.background-color') get setColor(){
    //codigo extra
    
    return this.backgroundColor;
  };

  @HostListener('mouseenter') onMouseOver(){
  //  this.renderer.setStyle(this.elementRef.nativeElement
    //  ,'background-color','yellow')
      this.backgroundColor='yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this.renderer.setStyle(this.elementRef.nativeElement
     // ,'background-color','white')
      this.backgroundColor='white';
  }
  constructor(private elementRef:ElementRef,
    private renderer:Renderer2
   ) { }

}
