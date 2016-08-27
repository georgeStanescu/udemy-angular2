import {Component,} from "angular2/core"
import {Control, ControlGroup, Validators, FormBuilder} from "angular2/common"

@Component({
  selector: "signup",
  templateUrl: "app/signup.template.html"
})
export class SignupComponent {
  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signup() {
    console.log(this.form.value);
  }
}