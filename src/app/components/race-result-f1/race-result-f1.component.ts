import {
    Component, Input, OnInit
}
from '@angular/core';
import {
    RaceResultF1Service
}
from './race-result-f1.service';
import {
  Api, Result
}
from './race-result-f1.interface';

@Component({ selector: 'app-race-result-f1', templateUrl: './race-result-f1.component.html' }) export class RaceResultF1Component implements OnInit {

    results: Array<Result> = [];
    raceName = '';
    raceDate = '';

    @Input() anio: string = '2023';
    @Input() fecha:string = '1';
   constructor(private _raceResultsF1Service: RaceResultF1Service) {}

    ngOnInit():void {
      this._raceResultsF1Service.getRaceResults(this.anio, this.fecha).subscribe(
        (rta : Api) => {
          console.log(rta);
          const selectedRace = rta.MRData.RaceTable.Races[0];
          this.results = selectedRace.Results.sort((n1,n2) => Number(n1.position) - Number(n2.position));
          this.raceName = selectedRace.Circuit.circuitName;
          this.raceDate = selectedRace.date;
        }
      )
    }

    getIconIncDec(res:Result): string{
      let icon = 'fa-solid fa-equals';
      if (Number(res.position) < Number(res.grid))
        icon = 'fa-solid fa-angles-up';
      if (Number(res.position) > Number(res.grid))
        icon = 'fa-solid fa-angles-down';
      return icon;
    }

}
