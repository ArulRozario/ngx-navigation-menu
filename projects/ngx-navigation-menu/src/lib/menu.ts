export class Menu {
  id: any;
  label: string;
  description?: string;
  link?: string;
  iconClass?: string;
  class?: string;
  active: boolean;
  expanded?: boolean;
  children?: Menu[] = [];
}
export class MenuStyle {
  class: string;
  activeClass: string;
}
export function getActiveMenu(menus: Menu[]): Menu | null {
  const activeMenu = menus.find(menu => menu.active);
  if (!activeMenu) { return null; }
  if (!activeMenu.children || !activeMenu.children.length) {
    return activeMenu;
  }
  return getActiveMenu(activeMenu.children);
}
export function getMenuPath(menus: Menu[], activeMenu: Menu) {

}
export const demoMenu: Menu[] = [
  {
    id: 1,
    label: 'Home',
    link: '/home',
    active: false,
    children: [
      {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: true,
      },
      {
        id: 3,
        label: 'Homework',
        link: '/home/homework',
        active: false,
        children: [
          {
            id: 3,
            label: 'New Homework',
            link: '/home/homework/new',
            active: false
          }
        ]
      }
    ]
  }
]

const active = getActiveMenu(demoMenu);
console.log({ active });
