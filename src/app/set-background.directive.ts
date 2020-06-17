import { Directive, Input, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';
import { Rgb } from '../code/color-palettes.type';
import chroma from 'chroma-js';
@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective {
  @Input() setBackground: Rgb;
  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.setBackground && changes.setBackground) {
      const color = chroma.gl(this.setBackground.red, this.setBackground.green, this.setBackground.blue, this.setBackground.alpha).hex();
      this.renderer.setStyle(this.elementRef.nativeElement, 'background', color);
    }
  }
}
