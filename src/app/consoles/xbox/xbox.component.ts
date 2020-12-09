import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from '../../shared/services/api.service'
import { AuthService } from '../../shared/services/auth.service';
import { DialogService } from '../../shared/services/dialog/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.css']
})

export class XboxComponent implements OnInit {

  games$ : Observable<any[]>
  generos: string[] = [];
  desenvolvedores: string[] = [];
  nomes: string[] = [];

  gamesFiltered = []
  keywords = ['Nome', 'Desenvolvedor', 'Gênero'];
  keyword = '';

  myControl = new FormControl();
  options: any[] = [];
  desenvolvedorControl = new FormControl()
  nomeControl = new FormControl()
  generoControl = new FormControl()
  filteredOptions: Observable<any[]>;
  games = [];
  idUser ='';
  constructor(private fb: FormBuilder, private http: HttpClient, private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router,
    public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {
      this.getGames();
      this.filterBySelect();

     }

  showFiller = false;

  getGames(){
    this.games$ = this.apiService.getGames('xbox')
    this.filtraArrayProAutoComplete()
  }
  ngOnInit(): void {
    this.idUser = this.authService.getUserId();
  }

  filterBySelect() : void {
    if(this.keyword == "Gênero"){
      this.filteredOptions = this.generoControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(2, value))
      );
    }else if(this.keyword == "Nome"){
      this.filteredOptions = this.nomeControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(0, value))
      );
    }else if(this.keyword == "Desenvolvedor"){
      this.filteredOptions = this.desenvolvedorControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(1, value))
      );
    }else{
      this.filteredOptions = this.games$
    }
  }


  /* 0 - nome
  1 - dev
  2 - genero */
  private _filter(op: number, value: string): string[] {
    const filterValue = value.toLowerCase();

    const options = [
      "nome",
      "desenvolveror",
      "genero"
    ]
    return this.gamesFiltered.filter(option => option[options[op]].toLowerCase().includes(filterValue));
  }

  toReviews(idGame: string) {
    let url = 'ID/reviews';
    this.router.navigateByUrl(url.replace('ID', idGame)).then(success => location.reload())
  }
  aux;
  filtraArrayProAutoComplete(){
    this.games$.subscribe((responses) => {
      this.gamesFiltered = responses

    this.gamesFiltered.forEach((item) => {
        if(!this.generos.includes(item.genero)){
          this.generos.push(item.genero)
        }

        if(!this.desenvolvedores.includes(item.desenvolveror)){
          this.desenvolvedores.push(item.desenvolveror)
        }

        if(!this.nomes.includes(item.nome)){
          this.nomes.push(item.nome)
        }

    })

    })






  }


}

