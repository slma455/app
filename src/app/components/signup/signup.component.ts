import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/ui/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertErrorComponent } from '../shared/ui/alert-error/alert-error.component';
import { AbstractControl } from '@angular/forms';
import { signupValidator } from '../shared/validators/register.validator';
import { passwordsMatch } from '../shared/utilities/confirm-password.utilites';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent,ReactiveFormsModule,AlertErrorComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
 register = new FormGroup({
  name: new FormControl('', signupValidator.name),
  email: new FormControl('',signupValidator.email),
  password: new FormControl('',signupValidator.password ),
  rePassword: new FormControl('', [Validators.required]),
}, { validators: passwordsMatch });


onSubmit(){
  console.log(this.register.value);
}
sendData(){
  if(this.register.valid){
    console.log(this.register.value);
  }
}
}
