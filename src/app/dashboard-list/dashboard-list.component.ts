import { Component, OnInit, Input } from '@angular/core';
import {GetMenuDataService} from '../get-menu-data.service';
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  @Input() pageTitle:string;
  @Input() show:string;
  @Input() intro:string;
  @Input() index:number;
  
  constructor(private _GetMenuDataService:GetMenuDataService) { }
  public menuList:any;

  ngOnInit() {
    this.getMegaMenuData();
  }

  getMegaMenuData(){
    this._GetMenuDataService.getMegaMenuService()
                      .subscribe((respoce)=>this.menuList= respoce)
  }

}
