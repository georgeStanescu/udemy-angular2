import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'voter',
  templateUrl: 'app/voting.template.html',
  styles: [`
      .voter {
        width: 20px;
        color: black;
        font-weight: bold;
      }

      .glyphicon-menu-up, .glyphicon-menu-down, .vote-counter {
        float: left;
        clear: both;
        text-align: center;
      }

      .vote-set {
        color: orange;
      }
  `]
})
export class VotingComponent { 
  @Input('voteCounter') voteCounter : number = 5;
  @Input('myVote') myVote : number = 0;

  onUpvoteClicked() {
    if (this.myVote == 1)
      return;
    
    this.myVote ++;
    this.voteCounter ++;
  }

  onDownvoteClicked() {
    if (this.myVote == -1)
      return;
    
    this.myVote --;
    this.voteCounter --;
  }

}