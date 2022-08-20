import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastResultF1Service {

  //https://ergast.com/api/f1/current/last/results
  
  constructor(private _http: HttpClient) { }

  getLastRaceResults():Observable<any> {
    return this._http.get('https://ergast.com/api/f1/current/last/results.json');
  }


}
