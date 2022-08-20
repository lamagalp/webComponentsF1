import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipF1Service {

  constructor(private _http: HttpClient) { }

  getDriversChampionship(anio: string, fecha: string):Observable<any> {
    return this._http.get('https://ergast.com/api/f1/' + anio + '/' + fecha + '/driverStandings.json');
  }
  getConstructorsChampionship(anio: string, fecha: string):Observable<any> {
    return this._http.get('https://ergast.com/api/f1/' + anio + '/' + fecha + '/constructorStandings.json');
  }

}
