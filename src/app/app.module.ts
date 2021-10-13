import { SlideDownDirective } from './directives/slidedown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './common/control-messages.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ActivateAccountComponent } from './auth/activate-account/activate-account.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TourComponent } from './dashboard/tour/tour.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './common/toast/toast.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    ControlMessagesComponent,
    ActivateAccountComponent,
    ForgotPasswordComponent,
    TourComponent,
    ToastComponent,
    PageNotFoundComponent,
    AuthComponent,
    ResetPasswordComponent,
    SlideDownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
