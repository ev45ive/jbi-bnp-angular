import { Directive, ElementRef, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  NgForm,
  NgModel,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appCensor]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CensorDirective,
      multi: true,
    },
  ],
})
export class CensorDirective implements Validator {
  
  @Input('appCensor') badword = '';

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (String(control.value).includes(this.badword)) {
      return {
        censor: { badword: this.badword },
      };
    }
    return null;
  }

  constructor(
    private elem: ElementRef<HTMLElement>,
    // private api:BadWordAPIService
    // private model: NgModel,
    // private form: NgForm,
  ) {
    // console.log('censor', model, form, elem.nativeElement);
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
