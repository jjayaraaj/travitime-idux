import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  newSignup(signupValue) {
    console.log(signupValue);
  }
}
