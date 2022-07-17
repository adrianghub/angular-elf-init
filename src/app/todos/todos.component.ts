import { Component } from '@angular/core';
import { TodosRepository } from './store/todos.repository';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  constructor(public todosRepo: TodosRepository) {}
}