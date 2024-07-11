import { Component, output } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        color:'accent',
        appearance:'outline'
      } satisfies MatFormFieldDefaultOptions,
    },
  ],
})
export class SearchFormComponent {
  isAdvanced = false;
  query = '';

  // @Output() methodName = new EventEmitter<Class>();
  search = output<string>();

  submit() {
    this.search.emit(this.query);
  }
}
