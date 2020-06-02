import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding ('class.show') isShow = false;

    @HostListener('click') toggleOpen() {//console.log(11);
        this.isShow = !this.isShow;
        //console.log(this.isShow);
    };

}

