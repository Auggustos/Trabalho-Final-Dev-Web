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
  nomeGame = '';
  url = "http://localhost:3000/";
  constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router,
    public dialog: MatDialog, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.nomeGame = params['id']);
    this.nomeGame = this.nomeGame.replace('%20', ' ');
    console.log(this.nomeGame);
  }


  ngOnInit(): void {
    this.http.get(`${this.url}reviews`)
      .subscribe(response => {
        console.log(response)
        let reviewsAux;
        reviewsAux = response;
        reviewsAux.forEach(review => {
          if (review.nome == this.nomeGame) {
            this.reviews.push(review)
          }
        })
        console.log(this.reviews)
      })
  }

  cadastraReview(){
/*     if (!this.authService.isLoggedIn()) {
      this.dialogService.showWarning("Você precisa estar logado para adicionar algum item ao carrinho!", "Autentique-se!").then(result => {
        this.router.navigateByUrl('login').then(success => location.reload())
      })
    } else { */
      this.dialog.open(ModalCadastrarReviewComponent, {
        width: '20%',
        height: '601px',
        data: {
          nomeGame: this.nomeGame,
        }
      });
    //}
  }

}
