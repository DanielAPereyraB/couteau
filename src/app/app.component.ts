import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sex', url: '/sex', icon: 'transgender'},
    { title: 'Age', url: '/age', icon: 'grid'},
    { title: 'Country', url: '/country' , icon: 'school'},
    { title: 'Profile', url: '/profile', icon: 'accessibility'},
  ];
  constructor() {}
}
