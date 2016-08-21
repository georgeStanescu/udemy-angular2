import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {VotingComponent} from './voting.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <courses></courses>
    <authors></authors>

    <i class="glyphicon glyphicon-star">
    <star-icon [is-selected]="post.isFavorite" (change)="onFavoriteChanged($event)"></star-icon>

    <like-icon [likesCounter]="post.likesCounter" [likeSelected]="post.likeSelected">
    </like-icon>

    <voter>
    </voter>

    `,
  directives: [CoursesComponent, AuthorsComponent, StarComponent, LikeComponent, VotingComponent]
})
export class AppComponent { 
  title = "Angular App";

  post = {
    title: "Title",
    isFavorite: true,
    likeSelected: false,
    likesCounter: 10
  }

  onFavoriteChanged(event) {
    console.log(event.newValue);
  }

}