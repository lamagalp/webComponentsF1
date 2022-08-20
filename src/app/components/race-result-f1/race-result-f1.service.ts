import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceResultF1Service {

  constructor(private _http: HttpClient) { }

  getRaceResults(anio: string, fecha: string):Observable<any> {
    return this._http.get('https://ergast.com/api/f1/' + anio + '/' + fecha + '/results.json');
  }

}
