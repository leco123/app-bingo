import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from './../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['',[Validators.required, Validators.minLength(6)]]
  });

  loading: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  private loginOkNotification(u: User){
    this.snackBar.open(
      'Usuário logado com sucesso, Bem vindo! '+ u.firstname +'!',
      'Successo', 
      {duration: 3000});
  }

  private loginErroNotification(err: any){
    this.snackBar.open(
      err,
      'Error', 
      {duration: 3000});
  }

  onSubmit(){

    this.loading = true;
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService
      .login(email, password)
      .subscribe(
        (u) => {
          this.loginOkNotification(u);
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        (err) => {
          this.loginErroNotification(err);
          this.loading = false;
        }
      );
  }

  loginGoogle(){
    this.loading = true;
    this.authService.loginGoogle()
      .subscribe(
        (u) => {
          this.loginOkNotification(u);
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        (err) => {
          this.loginErroNotification(err);
          this.loading = false;
        }
      );
  }

}
