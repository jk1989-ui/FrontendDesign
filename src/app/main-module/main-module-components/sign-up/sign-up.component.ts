import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public signUpForm:FormGroup | any;
  constructor(
    private readonly FormBuilder:FormBuilder,
    private readonly UserAuthService:UserAuthService
  ){
    this.signUpFormModel();
  }

  public signUpFormModel(){
    this.signUpForm = this.FormBuilder.group({
      name: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      address: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  public registerUser(){
    let formValues = this.signUpForm.value;
    this.UserAuthService.userRegister(formValues)
  }

  // life cycle hooks
  // constructor() 
  // ngOnChanges()
  // ngOnInit()
  // ngOnDestroy()

}
