import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpaces,
        UsernameValidators.cannotBeShorterThanTwo,
      ], UsernameValidators.shouldBeUnique
    ),
      password: new FormControl('', Validators.required)
    })
  });

  login() {
    // let isValid = new someAuthService.login(this.form.value);
    // if (!isValid) {
    //   this.form.setErrors({
    //     inValidLogin: true
    //   })
    // }
      this.form.setErrors({
        inValidLogin: true
      })
    console.log(this.form.value)
  }

  get username() {
    return this.form.get('account.username')
  }

}
