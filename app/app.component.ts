import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {VotingComponent} from './voting.component';
import {SummaryPipe} from './summary.pipe';

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

    <ul class="nav nav-pills">
      <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
      <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
    </ul>

    <div [ngSwitch]="viewMode">
      <template [ngSwitchWhen]="'map'" ngSwitchDefault>MapView Content</template>
      <template [ngSwitchWhen]="'list'">ListView Content</template>
    </div>

    <div>
      {{ post.title }}
      <br />
      {{ post.body | summary: 20 }}
    </div>
    `,
  pipes: [SummaryPipe],
  directives: [CoursesComponent, AuthorsComponent, StarComponent, LikeComponent, VotingComponent]
})
export class AppComponent { 
  title = "Angular App";

  post = {
    title: "Title",
    isFavorite: true,
    likeSelected: false,
    likesCounter: 10,
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    `
  }

  onFavoriteChanged(event) {
    console.log(event.newValue);
  }

  viewMode = 'map';
}