import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'star-icon',
  templateUrl: 'app/star.template.html',
  styles: [`
      .glyphicon-star {
        color: orange;
        cursor: pointer;
      }
  `]
})
export class StarComponent { 
  
  @Input('is-selected') isSelected : boolean = true;

  @Output() change = new EventEmitter();

  onStarIconClicked() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}