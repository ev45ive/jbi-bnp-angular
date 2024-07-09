import { Component } from '@angular/core';

@Component({
  selector: 'app-root, .pancakes[topping=banana]',
  templateUrl: './app.component.html',
  // template: `<h1>Hello {{title.toLocaleUpperCase()}}</h1>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jbibnp';
}
