import { Component, OnInit, Inject } from '@angular/core';
import { NGX_MENU_STYLE } from '../menu-provider';
import { MenuStyle, Menu } from '../menu';
import { NgxNavigationMenuService } from '../ngx-navigation-menu.service';
import { Observable } from 'rxjs';
import { MenuBaseComponent } from '../menu-base';

@Component({
  selector: 'ngx-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.scss']
})
export class TileMenuComponent extends MenuBaseComponent implements OnInit {

  constructor(@Inject(NGX_MENU_STYLE) public style: MenuStyle,
    public service: NgxNavigationMenuService) {
    super(style, service);
  }
  ngOnInit() {
  }

}
