import { Injectable } from '@angular/core';
import {Http, Headers, Response } from '@angular/http';
import {Router} from '@angular/router';
import { SystemConstants } from '../../core/common/system.constants';
import {AuthenService} from './authen.service';
import {NotificationService} from './notification.service';
import {UtilityService} from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _header: Headers
  constructor(private _http:Http, private _router:Router, private _authenService: AuthenService) { }

  get(uri: string) {
    this._header.delete('Authorization');
    this._header.append('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token)
    return this._http.get(SystemConstants.BASE_API + uri, {headers: this._header})
    .toPromise()
    .then(this.HandleSuccess).catch(this.HandleError);
  }

  post(uri: string, data?: any) {
    this._header.delete('Authorization');
    this._header.append('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token)
    return this._http.post(SystemConstants.BASE_API + uri, data, {headers: this._header})
    .toPromise()
    .then(this.HandleSuccess).catch(this.HandleError);
  }

  put(uri: string, data?: any) {
    this._header.delete('Authorization');
    this._header.append('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token)
    return this._http.put(SystemConstants.BASE_API + uri, data, {headers: this._header})
    .toPromise()
    .then(this.HandleSuccess).catch(this.HandleError);
  }

  delete(uri: string, key: string, id: string) {
    this._header.delete('Authorization');
    this._header.append('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token)
    return this._http.delete(SystemConstants.BASE_API + uri + "/?" + key + "=" + id, {headers: this._header})
    .toPromise()
    .then(this.HandleSuccess).catch(this.HandleError);
  }

  postFile(uri: string, data?: any) {
    let newHeader = new Headers();
    newHeader.append('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token)
    return this._http.post(SystemConstants.BASE_API + uri, data, {headers: this._header})
    .toPromise()
    .then((response : any)=>{
      let body = response.json();
      return body || {};
    }).catch(this.HandleError);
  }

  private HandleSuccess(response: any) {
    let body = response.json();
  }

  public HandleError(error: any){
    if(error.status == 401){
      localStorage.removeItem(SystemConstants.CURRENT_USER);

    }
    else
    {
     
    }
  }
  
}
