import { Directive, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor(private element: ElementRef, private route: ActivatedRoute) {}
}
