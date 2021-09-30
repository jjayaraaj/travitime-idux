import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SignupComponent } from './signup.component';
import { ReCaptchaModule } from 'angular-recaptcha3';

@NgModule({
  declarations: [],
  imports: [CommonModule, CarouselModule],
})
export class SignupModule {}
