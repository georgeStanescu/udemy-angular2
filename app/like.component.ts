import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'like-icon',
  templateUrl: 'app/like.template.html',
  styles: [`
      .glyphicon-heart {
        color: #ccc;
        cursor: pointer;
      }

      .heart-highlighted {
        color: deeppink;
      }
  `]
})
export class LikeComponent { 
  
  @Input('like-selected') likeSelected : boolean = false;
  @Input('likes-counter') likesCounter = 0;

  onHeartIconClicked() {
    this.likeSelected = !this.likeSelected;
    
    if (this.likeSelected) {
      this.likesCounter++;
    }
    else {
      this.likesCounter--;
    }
  }
}