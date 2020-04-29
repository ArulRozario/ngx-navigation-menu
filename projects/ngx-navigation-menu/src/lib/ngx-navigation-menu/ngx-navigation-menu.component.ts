import { Component, OnInit } from '@angular/core';
import { NgxNavigationMenuService } from '../ngx-navigation-menu.service';
import { MenuTypeEnum } from '../menu-type';

@Component({
  selector: 'ngx-navigation-menu',
  templateUrl: './ngx-navigation-menu.component.html',
  styleUrls: ['./ngx-navigation-menu.component.scss'],
  providers: [NgxNavigationMenuService]
})
export class NgxNavigationMenuComponent implements OnInit {

  constructor() { }
  ngOnInit() { }
  menuType = MenuTypeEnum;

  selectedMenuType: MenuTypeEnum;

  list() {
    this.selectedMenuType = MenuTypeEnum.LIST;
  }
  tree() {
    this.selectedMenuType = MenuTypeEnum.TREE;
  }
  tile() {
    this.selectedMenuType = MenuTypeEnum.TILE;
  }

}
