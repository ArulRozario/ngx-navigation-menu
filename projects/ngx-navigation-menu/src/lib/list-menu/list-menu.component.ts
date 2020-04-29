import { Component, OnInit, Inject } from '@angular/core';
import { MenuBaseComponent } from '../menu-base';
import { NGX_MENU_STYLE } from '../menu-provider';
import { MenuStyle } from '../menu';
import { NgxNavigationMenuService } from '../ngx-navigation-menu.service';

@Component({
  selector: 'ngx-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent extends MenuBaseComponent implements OnInit {

  constructor(@Inject(NGX_MENU_STYLE) public style: MenuStyle,
    public service: NgxNavigationMenuService) {
    super(style, service);
  }
  ngOnInit() { }

}

