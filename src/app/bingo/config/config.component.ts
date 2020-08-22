import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    }
);

constructor(
  private fb: FormBuilder,
  private snackBar: MatSnackBar,
  private router: Router
) { }

  ngOnInit() {
  }

  onSubmit(){

  }

}
