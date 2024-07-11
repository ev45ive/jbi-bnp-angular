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
  map,
  withLatestFrom,
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
    return new Observable<ValidationErrors | null>((subscriber) => {
      const handler = setTimeout(() => {
        if (String(control.value).includes(this.badword)) {
          subscriber.next({ censor: { badword: this.badword } });
        } else subscriber.next(null);
        subscriber.complete(); // stop pending!
      }, 500);
      return () => clearTimeout(handler);
    });
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

  queryField = this.searchForm.get('query')!;
  valueChanges = this.queryField.valueChanges;
  statusChanges = this.queryField.statusChanges;

  validChanges = this.statusChanges.pipe(
    withLatestFrom(this.valueChanges),
    filter(([status, value]) => status === 'VALID'),
    map(([status, value]) => value),
  );

  searchChanges = this.validChanges.pipe(
    debounceTime(500),
    distinctUntilChanged((a, b) => a === b),
  );
  
  ngOnInit(): void {
    this.searchChanges.subscribe((q) => this.search.emit(q));
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
