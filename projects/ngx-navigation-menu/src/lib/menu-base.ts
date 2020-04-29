import { Observable } from 'rxjs';
import { Menu, MenuStyle } from './menu';
import { Inject } from '@angular/core';
import { NGX_MENU_STYLE } from './menu-provider';
import { NgxNavigationMenuService } from '../public-api';

export class MenuBaseComponent {

  constructor(@Inject(NGX_MENU_STYLE) public style: MenuStyle,
    public service: NgxNavigationMenuService) {
    this.getMenus();
  }
  activeMenus$: Observable<Menu[]>;
  getMenus(): void {
    this.activeMenus$ = this.service.getActiveMenus();
  }
  ngAfterViewInit() {
  }
  trackByMenuId(index: number, menu: Menu) {
    return menu.id;
  }
  searchMenus(searchText: string) {
    this.service.searchMenus((searchText || '').toString().toLowerCase().trim());
  }
  navigate(menuId) {
    this.service.navigate(menuId);
  }
  clearFilter() {
    this.service.clearFilter();
  }
  previous() {
    this.service.previous();
  }

}
