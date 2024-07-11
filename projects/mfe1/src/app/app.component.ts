import { Component, Inject, SkipSelf } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: 'SESSION_BANANA_TOKEN',
      useValue: 'banana in mfe1',
    },
  ],
})
export class AppComponent {
  title = 'mfe1';

  constructor(
    @SkipSelf()
    @Inject('SESSION_BANANA_TOKEN')
    private parent: any,
    @Inject('SESSION_BANANA_TOKEN') private session: any,
  ) {
    console.log(parent, session);
  }
}
