import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualiResultF1Service {

  constructor(private _http: HttpClient) { }

  getQualiResults(anio: string, fecha: string):Observable<any> {
    return this._http.get('https://ergast.com/api/f1/' + anio + '/' + fecha + '/qualifying.json')
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    if(error.status == 0){
      console.log('Error ' +  error.error);
    }else{
      console.log('Error en el Back-End' +  error.status + ' | error ' + error.error );
    }
    return throwError(() => new Error ('Algo ha salido mal'));
  }
}
