import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationSeconds: number = 2000;

  constructor(
    private _userServ: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginData = {};
  }

  login() {
    if (!this.loginData.email || !this.loginData.password) {
      console.log('Failed process: Imcomplete data');
      this.message = 'Failed process: Imcomplete data';
      this.openSnackBarError();
      this.loginData = {};
    } else {
      this._userServ.login(this.loginData).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this._router.navigate(['/saveTask']);
          this.message = 'Sucessfull user registration';
          this.loginData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      );
    }
  }
  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationSeconds,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
