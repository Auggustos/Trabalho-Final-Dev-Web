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
  url = "http://localhost:3000/";
  uploadData = new FormData();
  generos = [ 'ação','aventura', 'estratégia', 'RPG', 'esporte','simulação'];
  selectedFile: File

  imageSrc: any;

  hide = true;

  consoles = ['Xbox','Playstation','Switch','PC',];
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
    console.log(this.authService.token)
    console.log(this.authService.getUser());
  //  this.authService.logout();
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
     const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    uploadData.append('nome', this.gameForm.value.titulo);
    uploadData.append('resumo', this.gameForm.value.resumo);
    uploadData.append('desenvolvedor', this.gameForm.value.desenvolvedor);
    uploadData.append('genero', this.gameForm.value.genero);
    uploadData.append('console', this.gameForm.value.console);
      
    this.apiSevice.criarGames(uploadData,this.authService.token)
      .subscribe(
        success => {
          this.dialogService.showSuccess(`${this.gameForm.value.titulo} cadastrado com sucesso!`, "Jogo Cadastrado!").then(result => {
            this.router.navigateByUrl('').then(success => location.reload())
          });
        },
        error => {
          this.dialogService.showError(`${error.error.error}`, "Erro no Cadastro!");
        }
      ); 
  }

}
