// export { AppServerModule as default } from './app/app.module.server';

import { bootstrapApplication, provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import routes from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";
import { provideNoopAnimations } from "@angular/platform-browser/animations";


export default () => 
    bootstrapApplication(AppComponent,{
      providers:[
        provideClientHydration(),
        provideNoopAnimations(),
        provideRouter(routes),
      ]
    });
    