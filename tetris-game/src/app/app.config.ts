import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { GamePageComponent } from './game-page/game-page.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'welcome', component: WelcomePageComponent },
      { path: 'ngTetrisGame', component: GamePageComponent },
      { path: '**', redirectTo: 'welcome' },
    ])
  ]
};
