import {Component} from 'angular2/core';

@Component({
  selector: 'star-icon',
  template: `
      <i class="glyphicon" 
        [class.glyphicon-star]="isSelected" 
        [class.glyphicon-star-empty]="!isSelected" 
        (click)="onStarIconClicked()" >
      </i>
    `
})
export class StarComponent { 
  isSelected : boolean = false;

  onStarIconClicked() {
    this.isSelected = !this.isSelected;
  }
}