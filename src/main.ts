import 'zone.js';
import { AppComponent } from './app/app.component';
import {
  bootstrapApplication,
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import routes from './app/app-routing.module';
import { API_URL } from './app/tokens';
import { environment } from './environments/environment';
import {
  HttpClient,
  HttpHandler,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ErrorInterceptor,
  URLInterceptor,
  authInterceptor,
} from './app/core/interceptors/auth.interceptor';

// platformBrowserDynamic().bootstrapModule(AppModule, {
//   ngZoneEventCoalescing: true
// })
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      // withHttpTransferCacheOptions({}), //SSR
      withInterceptors([URLInterceptor, authInterceptor, ErrorInterceptor]),
    ),
    // {
    //   provide: HttpHandler,
    //   useClass: MuchBetterHttpHandler
    // },
    provideRouter(routes),
    {
      provide: API_URL,
      useValue: {
        url: environment.apiConfig.url,
      },
    },
  ],
});
