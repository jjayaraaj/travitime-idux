import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appSlideDown]',
})
export class SlideDownDirective {
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'black';
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toogleOpen() {
  //   // this.backgroundColor = 'white';
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}

  // @HostListener('mouseleave') mouseleve(eventData: Event) {
  //   console.log('Mouse leve ', eventData);
  // }
}
