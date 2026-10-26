import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alertError',
  standalone: true,
  templateUrl: './alert-error.component.html',
})
export class AlertErrorComponent {
  @Input({ required: true }) formName!: FormGroup;
  @Input({ required: true }) controlName!: string;
}