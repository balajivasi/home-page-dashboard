import { Component, OnInit } from '@angular/core';
import {GetMenuDataService} from '../get-menu-data.service';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  providers: [GetMenuDataService]
})
export class SidemenuComponent implements OnInit {
  constructor(private _GetMenuDataService:GetMenuDataService) { }
  public menuList:any;

  ngOnInit() {
    this.getMegaMenuData();
  }

  getMegaMenuData(){
    this._GetMenuDataService.getMegaMenuService('./assets/data.json')
                      .subscribe((respoce)=>this.menuList= respoce)
  }
  
}
