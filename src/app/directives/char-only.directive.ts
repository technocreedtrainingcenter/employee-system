import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[charOnly]'
})
export class CharOnlyDirective {
    constructor(
        private elRef: ElementRef
    ) {}

    @HostListener('input') onChange() {
        const value = this.elRef.nativeElement.value;
        this.elRef.nativeElement.value = value.replace(/[^a-zA-Z]*/g, '');
    }
}