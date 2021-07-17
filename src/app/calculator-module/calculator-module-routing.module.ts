import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalciComponent } from './calci/calci.component';

const routes: Routes = [
  {
    path:'',
    component: CalciComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorModuleRoutingModule { }
