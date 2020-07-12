import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa} from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private service: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.service.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    if (confirm('Deseja remover a tarefa ' + tarefa.nome + '?' )) {
      this.service.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    this.service.atualizarStatus(tarefa.id);
    this.tarefas = this.listarTodos();
  }

}
