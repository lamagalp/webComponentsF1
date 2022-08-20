import {
    Component, Input, OnInit
}
from '@angular/core';
import {
    QualiResultF1Service
}
from './quali-result-f1.service';
import {
  Api, QualifyingResult
}
from './quali-result-f1.interface';

@Component({ selector: 'app-quali-result-f1', 
templateUrl: './quali-result-f1.component.html', 
styles: ['.example-card {  max-width: 400px;}']
}) export class QualiResultF1Component implements OnInit {

    results: Array<QualifyingResult> = [];
    raceName = '';
    raceDate = '';

    @Input() anio: string = '2022';
    @Input() fecha:string = '1';
   constructor(private _qualiResultsF1Service: QualiResultF1Service) {}

    ngOnInit():void {
      this._qualiResultsF1Service.getQualiResults(this.anio, this.fecha).subscribe(
        {   next: (rta : Api) => {
            console.log(rta);
            const selectedRace = rta.MRData.RaceTable.Races[0];
            this.results = selectedRace.QualifyingResults.sort((n1,n2) => Number(n1.position) - Number(n2.position));
            this.raceName = selectedRace.Circuit.circuitName;
            this.raceDate = selectedRace.date;
          }, error: (error) => console.error(error)
           , complete: () => console.info('Petición completa')
        }
      );
    }

    
}
