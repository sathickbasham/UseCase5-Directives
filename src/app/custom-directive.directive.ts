import {Directive, ElementRef} from '@angular/core';
@Directive({
    selector:'[CustomDirective]'

})
export class CustomDir {
    constructor(private elemref:ElementRef){
        elemref.nativeElement.style.background = 'red';
    }
}