import {Component} from "angular2/core"

@Component({
  selector: "email-subscription",
  templateUrl: "app/emailSubscription.template.html"
})
export class EmailSubscriptionComponent {
  frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];
    
    onSubscribe(form){
        console.log(form.value);
    }
}