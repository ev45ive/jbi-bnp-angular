import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello {{title.toLocaleUpperCase()}}</h1>`,
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  providers: [],
})
export class AppComponent {
  title = 'jbibnp';
}
