import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleF1Service {
  
  constructor(private _http: HttpClient) { }

  getSchedule(anio: number):Observable<any> {
    return this._http.get('https://ergast.com/api/f1/' + anio + '.json');
  }


}
