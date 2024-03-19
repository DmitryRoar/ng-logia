import { Directive, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[forbiddenInput]',
})
export class ForbiddenInputDirective {
  forbiddenKeys = ['.'];

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (this.forbiddenKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
