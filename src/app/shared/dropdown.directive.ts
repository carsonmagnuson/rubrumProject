import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openState = false;
  @HostListener('document:click', ['$event']) click (event: Event) {
    this.openState = this.elRef.nativeElement.contains(event.target) ? !this.openState : false;
  }

  constructor(private elRef: ElementRef) { }

}
