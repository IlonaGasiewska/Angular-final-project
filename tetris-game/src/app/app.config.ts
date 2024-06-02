import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { ScorePageComponent } from './components/score-page/score-page.component';
import { playerDataGuard } from './guards/player-data-guard.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {path:'welcome', component: WelcomePageComponent },
      {path:'game/:theme', component: GamePageComponent, canActivate: [playerDataGuard] },
      {path:'scores/:theme', component: ScorePageComponent },
      {path: '**', redirectTo: 'welcome'}
    ]),
    provideHttpClient(),
  ]
};