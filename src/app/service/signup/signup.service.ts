import { CommonService } from './../common/common.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private commonService: CommonService, private http: HttpClient) {}

  newSignup(signupValue) {
    const value = {
      email: signupValue.userEmail,
      password: signupValue.password,
      phone: signupValue.phone,
      company: signupValue.companyName,
      name: signupValue.fullName,
    };

    return this.http
      .post<{ message: string }>(
        `${this.commonService.api}traveloperator/create`,
        value
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'AN unknown error occured';
    if (!errorRes.error || !errorRes.error.message) {
      return errorMessage;
    }

    return throwError(errorRes.error.message);
  }
}
