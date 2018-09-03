import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
/* import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'; */

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }

  public extractData(res: Response | any) {
    let body = res.json();
    return body || { };
  }

  public handleErrorReport(error: Response | any) {
    let errMsg: string;

    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      errMsg = '0';
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    
    console.log("[ERROR] ...... ProcessHttpmsgProvider.handleErrorReport()", errMsg);
    /* return Observable.throw(errMsg); */
    return errMsg;
  }

  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof Error) {
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return Observable.throw(errMsg);
  }
}
