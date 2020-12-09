import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Produto } from '../../classes/produto.class';
import { ApiService } from '../../shared/services/api.service'
import { AuthService } from '../../shared/services/auth.service';
import { DialogService } from '../../shared/services/dialog/dialog.service';
//import { ModalVisualizarProdutoComponent } from '../../modais/modal-visualizar-produto/modal-visualizar-produto.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
games = [];



constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router,
  public dialog: MatDialog) { }
produtos: Produto[] = [];

showFiller = false;

quantidadeProduto: { id: string, quantidade: number }[] = [];

itensSidebar: string[] = ['Meus dados', 'Minhas compras'];

ngOnInit(): void {
  this.apiService.getGames()
  .subscribe(response => {
    let gamesAux;

    gamesAux = response;
    gamesAux.forEach(game => {
      if (game.console == 'pc') {
        this.games.push(game)
        this.options.push(game.nome)
      }
    })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    console.log(this.games)
  })
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
}

toReviews(idGame: string) {
  let url = 'ID/reviews';
  this.router.navigateByUrl(url.replace('ID',idGame)).then(success => location.reload())
}


}

