import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ChampionshipF1Component } from './components/championship-f1/championship-f1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { RaceResultF1Component } from './components/race-result-f1/race-result-f1.component';
import { ScheduleF1Component } from './components/schedule-f1/schedule-f1.component';
import { QualiResultF1Component } from './components/quali-result-f1/quali-result-f1.component';
import { LastResultF1Component } from './components/last-result-f1/last-result-f1.component';
import { MouseOverDirective } from './directives/mouse-over.directive';
import { LifeCycleDirective } from './directives/life-cycle.directive';

@NgModule({
  declarations: [
    AppComponent,
    LastResultF1Component,
    RaceResultF1Component,
    ScheduleF1Component,
    QualiResultF1Component,
    ChampionshipF1Component,
    LifeCycleDirective,
    MouseOverDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent, LastResultF1Component, RaceResultF1Component, ScheduleF1Component, ChampionshipF1Component]
})
export class AppModule implements DoBootstrap{ 
  //para convertir en web component
  constructor(private injector: Injector){
    const elementCustom1 = createCustomElement(
      LastResultF1Component,
      { injector:this.injector }
    );
    const elementCustom2 = createCustomElement(
      RaceResultF1Component,
      { injector:this.injector }
    );
    const elementCustom3 = createCustomElement(
      ScheduleF1Component,
      { injector:this.injector }
    );
    const elementCustom4 = createCustomElement(
      QualiResultF1Component,
      { injector:this.injector }
    );
    const elementCustom5 = createCustomElement(
      ChampionshipF1Component,
      { injector:this.injector }
    );
    customElements.define('last-f1-results', elementCustom1);
    customElements.define('race-f1-results', elementCustom2);
    customElements.define('schedule-f1-results', elementCustom3);
    customElements.define('quali-f1-results', elementCustom4);
    customElements.define('championship-f1-results', elementCustom5);
  }
  ngDoBootstrap(): void {
    console.log('ngDoBootstrap');
  }
}
