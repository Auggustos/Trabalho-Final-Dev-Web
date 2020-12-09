import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/services/api.service'
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog/dialog.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ModalCadastrarReviewComponent } from '../modal-cadastrar-review/modal-cadastrar-review.component';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews = [];
  idGame = '';
  nomeGame = '';
  gameObj: any;
  podeCadastrar = false;
  url = "http://localhost:3000/";
  constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router,
    public dialog: MatDialog, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.idGame = params['id']);
  }

  ngOnInit(): void {
    this.podeCadastrar = this.authService.isLoggedIn();
    this.gameObj = JSON.parse(this.authService.getGame());
    this.apiService.getReview(this.idGame)
      .subscribe(response => {
        console.log(response.reviews)
        this.reviews = response.reviews
/*         let reviewsAux;
        reviewsAux = response;
        if(reviewsAux.length>0){
          reviewsAux.forEach(review => {
            this.reviews.push(review)
          })
        } */
      })
  }

  cadastraReview() {
    /*     if (!this.authService.isLoggedIn()) {
          this.dialogService.showWarning("Você precisa estar logado para adicionar algum item ao carrinho!", "Autentique-se!").then(result => {
            this.router.navigateByUrl('login').then(success => location.reload())
          })
        } else { */
    this.dialog.open(ModalCadastrarReviewComponent, {
      width: '20%',
      height: '601px',
      data: {
        consoleGame: this.gameObj.console,
        idGame: this.idGame,
        nomeGame: this.nomeGame,
      }
    });
    //}
  }

}
