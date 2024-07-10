import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/shared.module';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  isAdvanced = false;
  query = '';

  submit() {}
}
