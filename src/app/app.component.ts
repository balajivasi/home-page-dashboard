import { Component } from '@angular/core';
import {GetMenuDataService} from './get-menu-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public CommonData:any;

  constructor(private _GetMenuDataService:GetMenuDataService) { }
  ngOnInit() {
    this.getCommonData()
  }


  getCommonData(){
    this._GetMenuDataService.getMegaMenuService('./assets/common.json')
                      .subscribe((respoce)=>this.CommonData= respoce)
  }
}
