import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { SystemConstants } from '../../core/common/system.constants';
import { LoggedUser } from '../../core/common/logged.user';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private _http: Http) { }

  login(username: string, password: string) {
    let body = 'userName=' + encodeURIComponent(username)
      + "&password=" + encodeURIComponent(password)
      + "&grant_type=password";
    let headers = new Headers();
    headers.append("Content-Type", "application/x-wwww-form-urlencoded");
    let options = new RequestOptions({ headers: headers });

    return this._http.post(SystemConstants.BASE_API + SystemConstants.LOGIN_API, body, options)
      .toPromise()
      .then((response: any) => {
        let users: LoggedUser = response.json();
        if (users && users.access_token) {
          localStorage.removeItem(SystemConstants.CURRENT_USER);
          localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(users));
        }
      })
      .catch((error: any) => {
        console.log(error);
        if (error.status == 401) {

        }
        else {

        }
      });


  }

  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }

  isAuthenticated(): boolean {
    var users = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (users != null) {
      return true;
    }

    return false;
  }

  getLoggedInUser(): LoggedUser {
    let user: LoggedUser;
    if (this.isAuthenticated()) {
      var userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      user = new LoggedUser(userData.access_token, userData.username, userData.fullname, userData.email, userData.avatar);
      return user;
    }
    user = null;
    return user;
  }

}
