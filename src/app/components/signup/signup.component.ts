import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/ui/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertErrorComponent } from '../shared/ui/alert-error/alert-error.component';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent,ReactiveFormsModule,AlertErrorComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
 register = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
  rePassword: new FormControl('', [Validators.required]),
}, { validators: this.passwordsMatch });

passwordsMatch(group: AbstractControl) {
  return group.get('password')?.value === group.get('rePassword')?.value
    ? null
    : { mismatch: true };
}
onSubmit(){
  console.log(this.register.value);
}
}
