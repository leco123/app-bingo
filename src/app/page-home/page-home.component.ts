import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  version: string = environment.vers;
  versionDate: string = environment.versDate;
  constructor() { }

  ngOnInit() {
  }

}
