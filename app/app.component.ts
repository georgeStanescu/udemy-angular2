import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {VotingComponent} from './voting.component';
import {SummaryPipe} from './summary.pipe';
import {BootstrapPanel} from './bootstrapPanel.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contactForm.component';
import {EmailSubscriptionComponent} from './emailSubscription.component';
import {SignupComponent} from './signup.component';

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
      <span>{{ post.title }}</span>
      <span> - assigned to: {{ post.asignee?.name }}</span>
      <br />
      {{ post.body | summary: 20 }}
    </div>

    <bs-panel>
      <div class="heading">This is the content to render in the heading section.</div>
      <div class="body">This is the content to render in the body section.</div>
      <div class="body">This is another content to render in the body section.</div>
    </bs-panel>

    <zippy title="Who can see my stuff?">
      <div>Here's who can see your stuff</div>
    </zippy>

    <contact-form>
    </contact-form>

    <email-subscription>
    </email-subscription>

    <signup>
    </signup>
    `,
  pipes: [SummaryPipe],
  directives: [CoursesComponent, AuthorsComponent, StarComponent, LikeComponent, VotingComponent, BootstrapPanel, ZippyComponent, ContactFormComponent, EmailSubscriptionComponent, SignupComponent]
})
export class AppComponent { 
  title = "Angular App";

  post = {
    title: "Task to complete",
    isFavorite: true,
    likeSelected: false,
    likesCounter: 10,
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    `,
    asignee: null
  }

  onFavoriteChanged(event) {
    console.log(event.newValue);
  }

  viewMode = 'map';
}