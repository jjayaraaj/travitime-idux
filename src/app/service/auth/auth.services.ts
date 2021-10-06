import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CommonService } from './../common/common.service';
import { Injectable } from '@angular/core';
import { OperatorModel } from 'src/app/model/operator';
import { catchError, tap } from 'rxjs/operators';
import { OperatorUser } from 'src/app/model/operatorUser.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  operatorUser = new BehaviorSubject<OperatorUser>(null);
  tokenExpirationTimer: any;

  constructor(
    private commonService: CommonService,
    private http: HttpClient,
    private router: Router
  ) {}

  login(operatorDetails) {
    return this.http
      .post<OperatorModel>(
        `${this.commonService.api}auth/operator`,
        operatorDetails
      )
      .pipe(
        catchError(this.commonService.handleError),
        tap((resData: any) => {
          console.log(resData);
          // this.handleAuthendication(resData.operatorDetail);
        })
      );
  }

  private handleAuthendication(userData) {
    const expirationDate = new Date(
      new Date().getTime() + +userData.expiresIn * 1000
    );

    const operatorUser = new OperatorUser(
      userData.email,
      userData.id,
      userData.token,
      userData.role,
      expirationDate
    );

    this.operatorUser.next(operatorUser);

    localStorage.setItem('operatorData', JSON.stringify(operatorUser));
  }

  logout() {
    this.operatorUser.next(null);
    this.router.navigateByUrl('/login');
    localStorage.removeItem('operatorData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }
}
