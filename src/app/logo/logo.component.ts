import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() leftNav:string;
  @Input() homeLink:string;
  constructor() { }

  ngOnInit() {
  }

}
