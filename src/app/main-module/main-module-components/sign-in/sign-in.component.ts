import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  public signInForm : FormGroup | any;
  constructor(
    private readonly FormBuilder:FormBuilder
  ) {
    this.signInFormModel()
  }

  public signInFormModel(){
    this.signInForm = this.FormBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(15)])
    })
  }

  signInUser(){
    let formValues = this.signInForm.value;
    console.log(formValues)
  }

}
