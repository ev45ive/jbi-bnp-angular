// export { AppServerModule as default } from './app/app.module.server';

import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import routes from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { API_URL } from './app/tokens';
import { environment } from './environments/environment';

export default () =>
  bootstrapApplication(AppComponent, {
    providers: [
      provideClientHydration(),
      provideNoopAnimations(),
      provideRouter(routes),
      provideHttpClient(
        withFetch(),
        // withHttpTransferCacheOptions({}), //SSR
      ),

      {
        provide: API_URL,
        useValue: {
          url: environment.apiConfig.url,
        },
      },
    ],
  });
