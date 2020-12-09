import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service'
import{ DialogService } from '../shared/services/dialog/dialog.service'

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent implements OnInit {

  constructor(private apiService: ApiService, private dialogService: DialogService, private router : Router) { }

  hide = true;

  public mask = ['(', /[1-9]/, /\d/, ')',' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  userForm = new FormGroup({
    nome: new FormControl('',Validators.required),
    email: new FormControl(''),
    senha: new FormControl('',Validators.required),
  });

  ngOnInit(): void {
  }
  goBack() {
    window.history.back();
  }
  cadastraUsuario() {
     const body = this.loadObject();
    this.apiService.criarUser(body).subscribe(success =>{
      this.dialogService.showSuccess(`Usuário ${body.nome} cadastrado com sucesso!`,"Cadastro Concluido").then(result => {
        this.router.navigateByUrl('login').then(success => location.reload())
      });
    },
    error => {
      this.dialogService.showError(`${error.error.message}`, "Acesso Negado!")
    }); 
  }
  loadObject(){
    return{
      nome: this.userForm.value.nome,
      email: this.userForm.value.email,
      senha: this.userForm.value.senha,
    }
  }

}
