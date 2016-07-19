import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <courses></courses>
    <authors></authors>

    <star-icon></star-icon>

    `,
  directives: [CoursesComponent, AuthorsComponent, StarComponent]
})
export class AppComponent { 
  title = "Angular App";
}