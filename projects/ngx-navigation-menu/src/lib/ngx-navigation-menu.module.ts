import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxNavigationMenuComponent } from './ngx-navigation-menu/ngx-navigation-menu.component';
import { Menu, MenuStyle } from './menu';
import { NGX_MENUS, NGX_MENU_STYLE } from './menu-provider';
import { CommonModule } from '@angular/common';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { TileMenuComponent } from './tile-menu/tile-menu.component';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';



@NgModule({
  declarations: [NgxNavigationMenuComponent, ListMenuComponent, TileMenuComponent, TreeMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxNavigationMenuComponent]
})
export class NgxNavigationMenuModule {
  static withMenus(menus: Menu[], styles: MenuStyle): ModuleWithProviders {
    return {
      ngModule: NgxNavigationMenuModule,
      providers: [
        {
          provide: NGX_MENUS,
          useValue: menus
        },
        {
          provide: NGX_MENU_STYLE,
          useValue: styles
        }
      ]
    }
  }
}
