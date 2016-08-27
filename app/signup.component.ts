import {Component,} from "angular2/core";
import {Control, ControlGroup, Validators, FormBuilder} from "angular2/common";
import {UsernameValidators} from "./usernameValidators";

@Component({
  selector: "signup",
  templateUrl: "app/signup.template.html"
})
export class SignupComponent {
  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.compose([Validators.required, UsernameValidators.cannotContainSpace]), UsernameValidators.shouldBeUnique ],
      password: ['', Validators.required]
    })
  }

  signup() {
    //calling a service (eg authentication service)
    
    this.form.find('username').setErrors({
      invalidLogin: true
    });

    console.log(this.form.value);
  }
}