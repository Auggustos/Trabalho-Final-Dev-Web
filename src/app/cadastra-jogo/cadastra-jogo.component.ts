import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../classes/produto.class';
import { Router } from "@angular/router";

import { DialogService } from '../shared/services/dialog/dialog.service'
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-cadastra-jogo',
  templateUrl: './cadastra-jogo.component.html',
  styleUrls: ['./cadastra-jogo.component.css']
})
export class CadastraJogoComponent implements OnInit {

  constructor(private dialogService: DialogService, private router: Router, private apiSevice: ApiService, private authService: AuthService) { }
  url = "http://localhost:3000/api/";
  uploadData = new FormData();

  selectedFile: File

  imageSrc: any;

  hide = true;

  consoles = [{ texto: 'Xbox', value: 1 }, { texto: 'Playstation', value: 2 }, { texto: 'Switch', value: 3 }, { texto: 'PC', value: 4 }];
  produto: Produto;

  gameForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    resumo: new FormControl('', Validators.required),
    desenvolvedor: new FormControl('', Validators.required),
    imagem: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    console: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }
  goBack() {
    window.history.back();
  }

  readURL(event): void {
    this.selectedFile = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.uploadData = new FormData();

      this.uploadData.append('imagem', this.selectedFile, this.selectedFile.name);

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }

    this.gameForm.controls['imagem'].setValue(this.selectedFile);
  }

  onUpload() {
   /*  const uploadData = new FormData();
    uploadData.append('imagem', this.selectedFile);
    uploadData.append('nome', this.gameForm.value.nome);
    uploadData.append('descricao', this.gameForm.value.descricao);
    uploadData.append('preco', this.gameForm.value.preco);
    uploadData.append('quantidade', this.gameForm.value.quantidade);
    uploadData.append('id_usuario', this.gameForm.value.id_usuario);
      this.http.get(`${this.url}games`)
    .subscribe(response => {
      let gamesAux;

      gamesAux = response;
      gamesAux.forEach(game =>{
        if(game.console =='pc'){
          this.games.push(game)
        }
      })
      console.log(this.games)
    })
    this.apiSevice.postProdutos(uploadData)
      .subscribe(
        success => {
          this.dialogService.showSuccess(`${this.gameForm.value.nome} cadastrado com sucesso!`, "Produto Cadastrado!").then(result => {
            this.router.navigateByUrl('').then(success => location.reload())
          });
        },
        error => {
          this.dialogService.showError(`${error.error.error}`, "Erro no Cadastro!");
        }
      ); */
  }

}
