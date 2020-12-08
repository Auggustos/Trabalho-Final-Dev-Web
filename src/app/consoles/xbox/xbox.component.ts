import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Produto } from '../../classes/produto.class';
import { ApiService } from '../../shared/services/api.service'
import { AuthService } from '../../shared/services/auth.service';
import { DialogService } from '../../shared/services/dialog/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.css']
})
export class XboxComponent implements OnInit {

  url = "http://localhost:3000/";
  games = [];


  constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router,
    public dialog: MatDialog) { }
  produtos: Produto[] = [];

  showFiller = false;

  quantidadeProduto: { id: string, quantidade: number }[] = [];

  itensSidebar: string[] = ['Meus dados', 'Minhas compras'];

  ngOnInit(): void {

    this.http.get(`${this.url}games`)
      .subscribe(response => {
        let gamesAux;

        gamesAux = response;
        gamesAux.forEach(game => {
          if (game.console == 'xbox') {
            this.games.push(game)
          }
        })
        console.log(this.games)
      })
  }


  toReviews(idGame: string) {
    let url = 'ID/reviews';
    this.router.navigateByUrl(url.replace('ID', idGame)).then(success => location.reload())
  }


}

