import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService} from './service';
import {CalculadoraRoutingComponent} from './calculadora-routing.component';
import {CalculadoraRoutingModule} from './calculadora-routing.module';


@NgModule({
  declarations: [CalculadoraComponent, CalculadoraRoutingComponent],
  exports: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
