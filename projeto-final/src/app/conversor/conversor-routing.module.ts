import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ConversorRoutingComponent} from './conversor-routing.component';
import {ConversorComponent} from './components';


export const ConversorRoutes: Routes = [
  {
    path: 'conversor',
    component: ConversorRoutingComponent,
    children: [{
      path: '',
      component: ConversorComponent
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ConversorRoutes)
  ],
  exports: [RouterModule]
})
export class  ConversorRoutingModule {

}
