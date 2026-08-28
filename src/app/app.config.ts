import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { withHashLocation ,withViewTransitions} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation(),withViewTransitions({
  skipInitialTransition: true
})) , 

    provideHttpClient()
  ],
};
