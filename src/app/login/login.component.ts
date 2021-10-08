import { Router } from '@angular/router';
import { AuthServices } from './../service/auth/auth.services';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from '../service/common/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  showPassword = false;

  constructor(
    private authService: AuthServices,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.router.navigate(['dashboard']);
      },
      (error) => {
        // this.error = error;
        this.isLoading = false;
        const dangerTpl = error;
        this.toastService.show(dangerTpl, {
          classname: 'bg-danger text-light',
          delay: 3000,
          autohide: true,
        });
      }
    );
  }

  onClickEye() {
    this.showPassword = !this.showPassword;
  }
}
