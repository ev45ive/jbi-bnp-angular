import { Directive, ElementRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgModel,
} from '@angular/forms';

@Directive({
  selector: '[contenteditable][ngModel]',

  // Inverison of control - Inject THIS into NgModel
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ContenteditableDirective,
      multi: true, // Push into array
    },
  ],
})
export class ContenteditableDirective implements ControlValueAccessor {
  constructor(
    private elem: ElementRef<HTMLElement>,
    // private model: NgModel, // implementation
    // private control: NgControl, // base class - absrtaction
  ) {
    if (!(elem.nativeElement instanceof HTMLElement)) {
      throw new Error('Not HTML Eleement');
    }
    // console.log(elem.nativeElement);
    // console.log(control);

    // Monkey patching
    // control.valueAccessor = this; // FIXME: INvertion of control!
  }

  writeValue(obj: any): void {
    this.elem.nativeElement.innerHTML = obj;
  }

  registerOnChange(setValue: any): void {
    this.elem.nativeElement.addEventListener('input', (e: Event) => {
      if (!(e instanceof InputEvent && e.target instanceof HTMLElement)) return;
      e.target.innerHTML; // InputEvent & {target: HTMLElement }
      setValue(this.elem.nativeElement.innerHTML);
    });
  }

  registerOnTouched(fn: any): void {
    this.elem.nativeElement.addEventListener('blur', fn);
  }

  // Implement Optionally
  setDisabledState?(isDisabled: boolean): void {
    this.elem.nativeElement.contentEditable = isDisabled ? 'false' : 'true';
  }

  // SRP. O/C. Liskov. InterSeg. InverContr
}
