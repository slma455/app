import { AbstractControl } from "@angular/forms";

export function passwordsMatch(group: AbstractControl) {
  return group.get('password')?.value === group.get('rePassword')?.value
    ? null
    : { mismatch: true };
}