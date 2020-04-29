import { InjectionToken } from '@angular/core';
import { Menu } from './menu';

export const NGX_MENUS: InjectionToken<Menu[]> = new InjectionToken('Menus');
export const NGX_MENU_STYLE: InjectionToken<any> = new InjectionToken('Menu styles');
