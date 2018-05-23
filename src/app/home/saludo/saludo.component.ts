import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  sName: string;

  constructor() { }

  ngOnInit() {
    this.sName = '';
  }

  borrar() {
    this.sName = '';

  }
}
