import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#000"
   }

}
