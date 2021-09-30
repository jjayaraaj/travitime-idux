import { SignupService } from './../service/signup/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../common/validation.service';
import { Observable, timer } from 'rxjs';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

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
      fullName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      companyName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    // this.recaptchaService.execute({ action: 'signup' }).then((token) => {
    //   // Backend verification method
    //   this.sendTokenToBackend(token);
    // });
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

  onCaptchaResponse(event) {
    console.log(event);
  }
}
