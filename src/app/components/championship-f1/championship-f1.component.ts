import {
    Component, Input, OnInit
}
from '@angular/core';
import {
  ChampionshipF1Service
}
from './championship-f1.service';
import {
  Api, DriverStanding, StandingsList
}
from './championship-f1.interface';

@Component({ selector: 'app-championship-f1', templateUrl: './championship-f1.component.html' }) export class ChampionshipF1Component implements OnInit {

  @Input() anio: string = '2022'; 
  @Input() fecha: string = '1'; 

  round: string = '';
  season: string ='';
  driversResults: Array<DriverStanding> = [];
    
   constructor(private _championshipF1Service: ChampionshipF1Service) {}

    ngOnInit():void {
      this._championshipF1Service.getDriversChampionship(this.anio, this.fecha).subscribe(
        (rta : Api) => {
          console.log(rta);
          const rtdos= rta.MRData.StandingsTable.StandingsLists[0];
          this.round = rtdos.round;
          this.season = rtdos.season;
          this.driversResults = rtdos.DriverStandings;//.sort((n1,n2) => Number(n1.DriverStandings.) - Number(n2.position));

        }
      )
    }

  /*   getIconIncDec(res:Result): string{
      let icon = 'fa-solid fa-equals';
      if (Number(res.position) < Number(res.grid))
        icon = 'fa-solid fa-angles-up';
      if (Number(res.position) > Number(res.grid))
        icon = 'fa-solid fa-angles-down';
      return icon;
    } */

}
