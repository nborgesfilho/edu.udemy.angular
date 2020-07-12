import {RouterModule, Routes} from '@angular/router';

import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent} from './cadastrar';
import {EditarTarefaComponent} from './editar';
import {NgModule} from '@angular/core';
import {TarefasRoutingComponent} from './tarefas-routing.component';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    component: TarefasRoutingComponent,
    children: [
      {
        path: '',
        component: ListarTarefasComponent
      },
      {
        path: 'listar',
        component: ListarTarefasComponent
      },
      {
        path: 'cadastrar',
        component: CadastrarTarefaComponent
      },
      {
        path: 'editar/:id',
        component: EditarTarefaComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(TarefaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TarefasRoutingModule {}
