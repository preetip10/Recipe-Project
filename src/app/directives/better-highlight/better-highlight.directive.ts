import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'cyan';

    constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
       //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'cyan');
       this.bacakgroundcolor = this.defaultColor;
    }

    @HostBinding('style.backgroundColor') bacakgroundcolor: string ;

    @HostListener('mouseenter') mouseover(eventData: Event) {
        //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'cyan');
        this.bacakgroundcolor = this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
        this.bacakgroundcolor = this.defaultColor;
    }
}