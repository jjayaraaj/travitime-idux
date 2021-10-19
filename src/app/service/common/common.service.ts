import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CommonService {
  api = environment.API_URL;
  constructor() {}

  public handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknow error has occured';

    if (!errorRes.error || !errorRes.error.message) {
      return throwError(errorMessage);
    }

    return throwError(errorRes.error.message);
  }

  loadPage(route) {
    localStorage.setItem('page', route);
  }
}
