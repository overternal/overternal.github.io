import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appGridArea]'
})
export class GridAreaDirective {

  @Input() appGridArea: string = '';

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.el.nativeElement.style.gridArea = this.appGridArea;
  }

}
