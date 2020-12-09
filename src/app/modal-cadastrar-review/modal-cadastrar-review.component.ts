import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cadastrar-review',
  templateUrl: './modal-cadastrar-review.component.html',
  styleUrls: ['./modal-cadastrar-review.component.css']
})
export class ModalCadastrarReviewComponent implements OnInit {
  url = "http://localhost:3000/";
  constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data: any) { }

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
    console.log('entrei')
    const body = this.loadBody();
    console.log(body)
    this.http.post(`${this.url}review`, body).pipe();
  }

  loadBody() {
    return {
      nome: this.data.nomeGame,
      nota: this.reviewForm.value.nota,
      opiniao: this.reviewForm.value.opiniao
    }
  }

}
