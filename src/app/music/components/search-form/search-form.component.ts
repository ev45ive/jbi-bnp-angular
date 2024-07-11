import { Component, inject, output } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/shared.module';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  NEVER,
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
} from 'rxjs';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [SHARED_IMPORTS, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        color: 'accent',
        appearance: 'outline',
      } satisfies MatFormFieldDefaultOptions,
    },
  ],
})
export class SearchFormComponent {
  isAdvanced = false;
  query = '';
  search = output<string>();

  submit() {
    this.search.emit(this.query);
  }

  // bob = inject(FormBuilder);
  bob = inject(NonNullableFormBuilder);

  badword = 'batman';
  censor = (
    control: AbstractControl<any, any>,
  ): Observable<ValidationErrors | null> => {
    // const obs = new Observable<ValidationErrors | null> (); // NEVER

    // UniCast  Observable
    const obs = new Observable<ValidationErrors | null>((subscriber) => {
      setTimeout(() => {
        if (String(control.value).includes(this.badword)) {
          subscriber.next( {
            censor: { badword: this.badword },
          })
        }
        subscriber.next(null);
      }, 2000);
    });

    obs.subscribe({
      next: console.log,
      error: console.log,
      complete: console.log,
    });

    return obs;
  };

  searchForm = this.bob.group({
    query: [
      'batman',
      {
        validators: [Validators.minLength(3), Validators.required],
        asyncValidators: [this.censor],
      },
    ],
    advanced: this.bob.group({
      type: ['album'],
      markets: this.bob.array([
        this.bob.group({
          code: ['UK'],
        }),
      ]),
    }),
  });

  ngOnInit(): void {
    const queryField = this.searchForm.get('query')!;

    //  Multicasting Observable
    const valueChanges = queryField.valueChanges;

    valueChanges
      .pipe(
        // wait for 500ms silence
        debounceTime(500),

        // Minium 3 characters
        filter((q) => q?.length >= 3),

        // No duplicates
        distinctUntilChanged((a, b) => a === b),
      )
      .subscribe((q) => this.search.emit(q));
  }

  markets = this.searchForm.get([
    'advanced',
    'markets',
  ]) as FormArray<FormGroup>;

  addMarket() {
    this.markets.push(
      this.bob.group({
        code: [''],
      }),
    );
  }

  // searchForm = new FormGroup({
  //   query: new FormControl('batman')
  // })
}
