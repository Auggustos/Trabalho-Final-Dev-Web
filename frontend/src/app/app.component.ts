import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { exit } from 'process';
import { ApiService } from './shared/services/api.service';
import { AuthService } from './shared/services/auth.service';
import { DialogService } from './shared/services/dialog/dialog.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
export interface rotas {
  nome: string,
  rota: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url = "http://localhost:3000/";
  title = 'Sistema-Horti-Fruti';

  badge: number;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, private dialogService: DialogService, private apiService: ApiService) {
  }
  carrinho;
  usuario = '';
  logado = false;

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.logado = this.authService.isLoggedIn();
      this.usuario = '';
    } else {
      if (this.authService.getUser().length > 1) {
        this.usuario = this.authService.getUser()
        this.logado = this.authService.isLoggedIn();
      }
    }
  }
  desloga() {
    location.reload();
    this.authService.logout();
    this.usuario = this.authService.getUser();
    if (!this.authService.isLoggedIn()) {
      this.usuario = '';
    }
    this.dialogService.showSuccess("Logout realizado com sucesso!", "Logout");
  }

  itensSidebar: rotas[] = [
    { nome: 'Meus dados', rota: 'usuario/atualiza' },
    { nome: 'Gerenciar Vendas', rota: 'gerir' },
    { nome: 'Cadastrar Produtos', rota: 'produto/cadastra' },
    { nome: 'Pedidos', rota: 'pedidos' },
    { nome: 'Ofertas', rota: '' }];
  onRowClicked(item: rotas) {
    this.router.navigate([item.rota]);
  }

  toCadastra() {
    if (!this.authService.isLoggedIn()) {
      this.dialogService.showWarning("Você precisa estar logado para cadastrar algum jogo!", "Autentique-se!").then(result => {
        this.router.navigateByUrl('login').then(success => location.reload())
      })
    } else {
      this.router.navigate(['/cadastra-jogo']);
    }
  }
}

