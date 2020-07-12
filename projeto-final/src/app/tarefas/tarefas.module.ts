import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaConcluidaDirective, TarefaService} from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import {TarefasRoutingModule} from './tarefas-routing.module';
import {TarefasRoutingComponent} from './tarefas-routing.component';


@NgModule({
  declarations: [ListarTarefasComponent, CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective,
  TarefasRoutingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TarefasRoutingModule
  ],
  providers : [
    TarefaService
  ]
})
export class TarefasModule { }
