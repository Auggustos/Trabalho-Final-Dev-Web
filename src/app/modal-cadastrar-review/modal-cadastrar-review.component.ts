import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog/dialog.service';

@Component({
  selector: 'app-modal-cadastrar-review',
  templateUrl: './modal-cadastrar-review.component.html',
  styleUrls: ['./modal-cadastrar-review.component.css']
})
export class ModalCadastrarReviewComponent implements OnInit {
  url = "http://localhost:3000/";
  constructor( private apiService: ApiService, private dialogService: DialogService,private authService: AuthService,private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data: any) { 

  }

  reviewForm = new FormGroup({
    nota: new FormControl('', Validators.compose([
      Validators.min(0),
      Validators.max(10)
    ])),
    opiniao: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  cadastraReview(){

    const body = this.loadBody();
    this.apiService.criarReview(body,this.authService.token).subscribe(success =>{
      this.dialogService.showSuccess(`Review cadastrado com sucesso!`,"Cadastro Concluido").then(result => {
       location.reload()
      });
    },
    error => {
      this.dialogService.showError(`${error.error.message}`, "Algo deu errado!")
    }); 
    }

  loadBody() {
    return {
      idGame: this.data.idGame,
      nota: this.reviewForm.value.nota,
      opiniao: this.reviewForm.value.opiniao
    }
  }

}
