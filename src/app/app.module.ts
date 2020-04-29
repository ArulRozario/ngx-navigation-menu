import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Menu } from 'projects/ngx-navigation-menu/src/lib/menu';
import { NgxNavigationMenuModule } from 'projects/ngx-navigation-menu/src/lib/ngx-navigation-menu.module';
export const demoMenu: Menu[] = [

  {
    id: 1,
    label: 'Home',
    link: '/home',
    active: false,
    description: 'Manage the organization',
    children: [
      {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      },
      {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      },
      {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      }, {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      }, {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      }, {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      }, {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      }, {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      }, {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      }, {
        id: 2,
        label: 'Dashboard',
        link: '/home/dashboard',
        description: 'View dashboards for different activities in the application',
        active: false,
      },
      {
        id: 3,
        label: 'Homework',
        description: 'Manage and send homeworks anywhere anytime',
        link: '/home/homework',
        active: false,
        children: [
          {
            id: 3,
            label: 'New Homework',
            link: '/home/homework/new',
            active: false
          },
          {
            id: 3,
            label: 'View Homeworks',
            link: '/home/homework/view',
            active: false
          },
          {
            id: 3,
            label: 'Reports',
            link: '/home/homework/report',
            active: false,
            description: 'Daily, monthly, Teacher wise, Class wise reports'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    label: 'About',
    link: '/about',
    active: false,
    description: 'About the organization and it\'s Services'
  },
  {
    id: 1,
    label: 'Contact Us',
    link: '/contact-us',
    active: false,
    description: 'Contact information, Address'
  },
  {
    id: 1,
    label: 'Help',
    link: '/help',
    active: false,
    description: 'Detailed help on every page'
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNavigationMenuModule.withMenus(demoMenu, { activeClass: 'menu-item-active', class: 'menu-item' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
