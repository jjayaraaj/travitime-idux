import { SignupService } from './../service/signup/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../common/validation.service';
import { Observable, timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  formErrors: any;
  isLoading = false;
  accountActivated = false;
  sigunpSuccess = false;

  get f() {
    return this.signupForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initSignupForm();
  }

  initSignupForm(): void {
    this.signupForm = this.fb.group({
      userEmail: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) return;
    this.isLoading = true;
    this.signupService.newSignup(this.signupForm.value);

    const timerSource = timer(3000);

    timerSource.subscribe((val) => {
      this.isLoading = false;
      this.sigunpSuccess = true;
    });

    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 5000);
  }
}
