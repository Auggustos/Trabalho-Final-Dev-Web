import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from './shared/services/dialog/dialog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TextMaskModule } from 'angular2-text-mask';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { AuthGuard, AuthInterceptor, AuthService } from './shared/services/auth.service';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { XboxComponent } from './consoles/xbox/xbox.component';
import { PlaystationComponent } from './consoles/playstation/playstation.component';
import { SwitchComponent } from './consoles/switch/switch.component';
import { PcComponent } from './consoles/pc/pc.component';
import { CadastraJogoComponent } from './cadastra-jogo/cadastra-jogo.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ModalCadastrarReviewComponent } from './modal-cadastrar-review/modal-cadastrar-review.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';


@NgModule({
  declarations: [
    ErrorComponent,
    AppComponent,
    XboxComponent,
    PlaystationComponent,
    SwitchComponent,
    PcComponent,
    CadastraJogoComponent,
    ReviewsComponent,
    ModalCadastrarReviewComponent,
    TelaLoginComponent,
    CadastraUsuarioComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatGridListModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule,
    TextMaskModule,
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DialogService
  ],
  entryComponents: [
    ModalCadastrarReviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
