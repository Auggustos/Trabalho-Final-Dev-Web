import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './shared/services/auth.service';
import { XboxComponent } from './consoles/xbox/xbox.component';
import { PlaystationComponent } from './consoles/playstation/playstation.component';
import { SwitchComponent } from './consoles/switch/switch.component';
import { PcComponent } from './consoles/pc/pc.component';
import { CadastraJogoComponent } from './cadastra-jogo/cadastra-jogo.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    component: XboxComponent
  },
  {
    path: 'xbox',
    component: XboxComponent
  },
  {
    path: 'playstation',
    component: PlaystationComponent
  },
  {
    path: 'switch',
    component: SwitchComponent
  },
  {
    path: 'pc',
    component: PcComponent
  },
  {
    path: 'cadastra-jogo',
    component: CadastraJogoComponent
  },
  {
    path: ':id/reviews',
    component: ReviewsComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
