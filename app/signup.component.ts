import {Component,} from "angular2/core"
import {Control, ControlGroup, Validators} from "angular2/common"

@Component({
  selector: "signup",
  templateUrl: "app/signup.template.html"
})
export class SignupComponent {
  form = new ControlGroup({
    username: new Control('', Validators.required),
    password: new Control('', Validators.required)
  });

  signup() {
    console.log(this.form.value);
  }
}