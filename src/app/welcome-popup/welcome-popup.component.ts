import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-popup',
  templateUrl: './welcome-popup.component.html',
  styleUrls: ['./welcome-popup.component.css']
})
export class WelcomePopupComponent implements OnInit {
  @Input() welcome:string;
  constructor() { }

  ngOnInit() {
  }

}
