import {
    Component, OnInit
}
from '@angular/core';
import {
    ScheduleF1Service
}
from './schedule-f1.service';
import {
  Api, Race
}
from './schedule-f1.interface';

import {trigger, state, transition, animate , style } from '@angular/animations';

@Component({ selector: 'app-schedule-f1', templateUrl: './schedule-f1.component.html' ,
animations: [
  trigger('animaciones',[
   /*  state('active', style({
        transform: 'translate(-10px, 0px)'
      })),
    state('inactive', style({
      transform: 'translate(20px, 0px)'
    })), */
    state('active', style({
      transform: 'scale(1.5,1.5)'
    })),
  state('inactive', style({
    transform: 'scale(0.7,0.7)'
  })),
    transition('inactive => active', animate('1000ms ease-in')),
    transition('active => inactive', animate('1000ms ease-out'))
    ])
]
}) export class ScheduleF1Component implements OnInit {

  estado = 'inactive';
  fecha : Date;
  anioSeleccionado : string = '' ;
  fechaSeleccionada: string = '' ;
  races: Race[] = [];
  mostrarResultados = true;

  constructor(private _scheduleF1Service: ScheduleF1Service) {
    this.fecha = new Date();
  }

    ngOnInit():void {
      this._scheduleF1Service.getSchedule(2023).subscribe(
        (rta : Api) => {
          //console.log(rta);
          this.races = rta.MRData.RaceTable.Races;
        }
      );
      setInterval(() =>{
        if(this.estado == 'active')
        this.estado = 'inactive';
        else
         this.estado = 'active';
      },1000);


    }

  obtenerResultados(anio: string, fecha: string){
    this.anioSeleccionado = anio;
    this.fechaSeleccionada = fecha;
    this.mostrarResultados = false;
  }

  ocultarResultados(anio: string, fecha: string){
    this.anioSeleccionado = '';
    this.fechaSeleccionada = '';
    this.mostrarResultados = true;
  }

  show(anio: string, fecha: string){
    return (anio ==  this.anioSeleccionado && fecha == this.fechaSeleccionada);
  }

  fechaValida(raceDate: string){
    return(this.fecha >= new Date(raceDate));
  }
}
