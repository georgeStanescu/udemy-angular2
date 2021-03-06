import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
  selector: 'authors',
  template: `
    <h2>Authors</h2>
    {{ title }}
    <ul>
      <li *ngFor="#author of authors, #i = index">
        {{ i+1 }}. {{author}}
      </li>
    </ul>
    `,
    providers: [AuthorService]
})
export class AuthorsComponent { 
  title: string = "The title of author page";
  authors: string[];

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}