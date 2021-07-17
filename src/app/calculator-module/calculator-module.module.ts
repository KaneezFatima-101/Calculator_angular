import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorModuleRoutingModule } from './calculator-module-routing.module';
import { CalciComponent } from './calci/calci.component';


@NgModule({
  declarations: [
    CalciComponent
  ],
  imports: [
    CommonModule,
    CalculatorModuleRoutingModule
  ]
})
export class CalculatorModuleModule { }
