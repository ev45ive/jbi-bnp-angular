import { Component, inject, output } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/shared.module';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

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

  bob = inject(FormBuilder);

  searchForm = this.bob.group({
    query: ['batman'],
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
    // this.searchForm.valueChanges.subscribe(console.log)
    const valueChanges = queryField.valueChanges;
    
    valueChanges.pipe(
      // Minium 3 characters 

      // No duplicates

      // wait for 500ms silence 

    ).subscribe(console.log)
    
  }

  markets = this.searchForm.get([
    'advanced',
    'markets',
  ]) as FormArray<FormGroup>;

  addMarket(){
    this.markets.push(this.bob.group({
      code:['']
    }))
  }

  // searchForm = new FormGroup({
  //   query: new FormControl('batman')
  // })
}
