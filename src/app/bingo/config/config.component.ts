import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  formConfig: FormGroup = this.fb.group({
    'numToCard': [60,[Validators.required]],
    'numMinToCard': [5, [Validators.required]],
    'numMaxToCard': [150,[Validators.required]],
    'numBallWin': [20,[Validators.required]],
    'numConcurso': [232,[Validators.required]],
    'confiDesc': ['',[Validators.required]],
    }
);

constructor(
  private fb: FormBuilder,
  private authService: AuthService,
  private snackBar: MatSnackBar,
  private router: Router
) { }

  ngOnInit() {
  }

  onSubmit() {
    const newConfig: Config = {
      concursoCod: this.formConfig.value.numConcurso,
      qtdNumPorCartela: this.formConfig.value.numToCard,
      qdtMinCartPorRodada: this.formConfig.value.numMinToCard,
      qtdMaxCartelaPorRodada: this.formConfig.value.numMaxToCard,
      ganhaQuemAcertarTotalPedras: this.formConfig.value.numBallWin,
      descricaoPremio: this.formConfig.value.numToCard,
    };

  }

}
