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

@Component({
  selector: 'app-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.css']
})

export class XboxComponent implements OnInit {

  myControl = new FormControl();
  options: any[] = [];
  filteredOptions: Observable<string[]>;
  games = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private apiService: ApiService, private authService: AuthService, private dialogService: DialogService, private router: Router,
    public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }

  showFiller = false;

  ngOnInit(): void {
    this.apiService.getGames()
      .subscribe(response => {
        let gamesAux;
        gamesAux = response;
        gamesAux.forEach(game => {
          if (game.console == 'xbox') {
            this.options.push(game)
            this.games.push(game)
          }
        })
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
          console.log(this.filteredOptions)
      })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  toReviews(idGame: string) {
    let url = 'ID/reviews';
    this.router.navigateByUrl(url.replace('ID', idGame)).then(success => location.reload())
  }


}

