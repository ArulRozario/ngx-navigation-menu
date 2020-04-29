import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { NGX_MENUS } from './menu-provider';
import { Menu } from './menu';
@Injectable({
  providedIn: 'root'
})
export class NgxNavigationMenuService {
  activeMenuId: any;
  activeParentMenuId: any;
  constructor(@Inject(NGX_MENUS) private menus: Menu[]) {
    this.menus = this.createIds(this.menus);
    this.activeMenuSubject.next(this.menus);
  }
  createIds(menus: Menu[]) {
    return menus.map(menu => {
      menu.id = UUID.UUID();
      if (menu.children && menu.children.length) {
        menu.children = this.createIds(menu.children);
      }
      return menu;
    });
  }
  private activeMenuSubject: BehaviorSubject<Menu[]> = new BehaviorSubject([]);
  getActiveMenus() {
    return this.activeMenuSubject.asObservable();
  }
  navigate(menuId) {
    const menus: Menu[] = this.getActiveMenu(menuId, this.menus);
    this.activeMenuSubject.next(menus);
    this.activeMenuId = menuId;

  }
  getActiveParentMenuId(menus: Menu[], activeMenuId) {

  }
  previous() {
    const menus = this.getPreviousMenu(this.activeMenuId, this.menus);
    this.activeMenuSubject.next(menus);
  }
  getMenu(menuId, menus: Menu[]) {
    for (let menu of menus) {
      if (menu.id === menuId) {
        return menus;
      }
      if (this.hasChildren(menu)) {
        this.activeParentMenuId = menu.id;
        return this.getMenu(menuId, menu.children);
      }
    }
  }
  getPreviousMenu(menuId, menus: Menu[]) {
    if (!this.activeParentMenuId) { return this.menus; }
    this.activeMenuId = null;
    return this.getMenu(this.activeParentMenuId, this.menus);
  }
  hasChildren(menu: Menu) {
    return menu && menu.children && menu.children.length;
  }
  getActiveMenu(menuId, menus: Menu[]): Menu[] {
    for (const menu of menus) {
      if (menu.id === menuId) {
        if (this.hasChildren(menu)) {
          this.activeParentMenuId = menu.id;
          return menu.children;
        }
        return menus;
      }
      if (this.hasChildren(menu)) {
        this.activeParentMenuId = menu.id;
        return this.getActiveMenu(menuId, menu.children);
      }
    }
    this.activeParentMenuId = null;
    return this.menus;
  }
  searchMenus(searchText: string) {
    if (!searchText || !searchText.trim().length) { this.clearFilter(); }
    const foundMenus = this.findMenus(searchText, this.menus);
    this.activeMenuSubject.next(this.sortMenus(foundMenus));
  }
  sortMenus(menus: Menu[]) {
    return menus.sort((a, b) => a.label > b.label ? 1 : a.label < b.label ? -1 : 0);
  }
  findMenus(searchText, menus: Menu[]) {
    const filteredMenus = [];
    const matchingMenus = menus.filter(menu => {
      if (this.hasChildren(menu)) {
        filteredMenus.push(...this.findMenus(searchText, menu.children));
      }
      const labelMatches = (menu.label || '').toString().toLowerCase().includes(searchText)
      const descMatches = (menu.description || '').toString().toLowerCase().includes(searchText);
      return labelMatches || descMatches;
    });
    filteredMenus.push(...matchingMenus);
    return filteredMenus;
  }
  clearFilter() {
    let menu: Menu[] | Menu = this.getActiveMenu(this.activeMenuId, this.menus);
    if (!menu || menu instanceof Array && !menu.length) {
      this.activeMenuSubject.next(this.menus);
      return;
    }
    this.navigate(this.activeMenuId);
  }
}
