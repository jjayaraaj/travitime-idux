import { Component } from '@angular/core';
import { AuthServices } from './service/auth/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app2';
  constructor(private authService: AuthServices) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
}
