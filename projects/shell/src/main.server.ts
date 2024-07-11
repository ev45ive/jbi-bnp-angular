import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { initFederation } from '@angular-architects/native-federation';

import manifest from '../public/federation.manifest.json';

console.log(manifest);

const bootstrap = () =>
//   initFederation(manifest).then(() =>
    bootstrapApplication(AppComponent, config)
//   );

export default bootstrap;
