import { SignupService } from './../service/signup/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../common/validation.service';
import { Observable, timer } from 'rxjs';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ValidationFormsService } from '../service/common/validation-form.service';
import { ToastService } from '../service/common/toast.service';

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
  show = true;

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
    private router: Router,
    private vf: ValidationFormsService,
    public toastService: ToastService
  ) {
    this.formErrors = this.vf.errorMessages;
  }

  ngOnInit(): void {
    this.initSignupForm();
  }

  initSignupForm(): void {
    this.signupForm = this.fb.group({
      fullName: ['jauyasj', [Validators.required]],
      userEmail: [
        'jjayaraaj@gmail.com',
        [Validators.required, ValidationService.emailValidator],
      ],
      password: [
        'Asdfdf4r5t',
        [
          Validators.required,
          Validators.minLength(this.vf.formRules.passwordMin),
          Validators.pattern(this.vf.formRules.passwordPattern),
        ],
      ],
      companyName: ['test', [Validators.required]],
      phone: [
        '111111111111',
        [
          Validators.required,
          Validators.pattern(this.vf.formRules.phonePattern),
        ],
      ],
    });
  }

  onSubmit() {
    // this.recaptchaService.execute({ action: 'signup' }).then((token) => {
    //   // Backend verification method
    //   this.sendTokenToBackend(token);
    // });
    if (this.signupForm.invalid) return;
    this.isLoading = true;
    this.signupService.newSignup(this.signupForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        this.isLoading = false;
        const dangerTpl = error;
        this.toastService.show(dangerTpl, {
          classname: 'bg-danger text-light',
          delay: 3000,
          autohide: true,
        });
      }
    );

    // const timerSource = timer(3000);

    // timerSource.subscribe((val) => {
    //   this.isLoading = false;
    //   this.sigunpSuccess = true;
    // });
  }

  onCaptchaResponse(event) {
    console.log(event);
  }
}
