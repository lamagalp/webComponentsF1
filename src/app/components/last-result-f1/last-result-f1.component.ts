import {
    Component, OnInit
}
from '@angular/core';
import {
    LastResultF1Service
}
from './last-result-f1.service';
import {
  Api,
    Result
}
from './last-results-f1.interface';

@Component({ selector: 'app-last-result-f1', templateUrl: './last-result-f1.component.html' }) export class LastResultF1Component implements OnInit {

    results: Array<Result> = [];
    raceName = '';
    raceDate = '';
   constructor(private _lastResultsF1Service: LastResultF1Service) {}

    ngOnInit():void {
      this._lastResultsF1Service.getLastRaceResults().subscribe(
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
