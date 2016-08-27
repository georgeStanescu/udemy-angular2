import {Component} from 'angular2/core';

@Component({
  selector: 'contact-form',
  templateUrl: 'app/contactForm.template.html',
  styles: [`
      .glyphicon-star {
        color: orange;
        cursor: pointer;
      }
  `]
})
export class ContactFormComponent { 

  onSubmit(form) {
    console.log(form);
  }
}