import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { API_URL } from './tokens';
import { MainNavigationComponent } from './core/layouts/main-navigation/main-navigation.component';
import { SHARED_IMPORTS } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello {{title.toLocaleUpperCase()}}</h1>`,
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, SHARED_IMPORTS, MainNavigationComponent],
  providers: [],
})
export class AppComponent {
  title = 'jbibnp';
}
