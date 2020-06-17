import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {ShowcaseModule} from './app/showcase/showcase.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ShowcaseModule)
  .catch(err => console.error(err));
