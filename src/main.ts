import 'zone.js';
import { AppComponent } from './app/app.component';
import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import routes from './app/app-routing.module';
import { API_URL } from './app/tokens';
import { environment } from './environments/environment';

// platformBrowserDynamic().bootstrapModule(AppModule, {
//   ngZoneEventCoalescing: true
// })
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideRouter(routes),
    {
      provide: API_URL,
      useValue: {
        url: environment.apiConfig.url,
      },
    },
    // Override:
    // {
    //   provide: API_URL,
    //   useValue: {
    //     url: 'http://localhost/api',
    //   },
    // },
  ],
});
