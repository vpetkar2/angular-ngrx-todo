import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TodoRemove } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  public todos: Observable<Todo[]>;

  constructor(private store: Store<{todos: Observable<Todo[]>}>) { 
    this.store.pipe(select('todos')).subscribe(values => {
      this.todos = values;
    });
  }

  ngOnInit() {
  }

  removeTodo(index: number) {
    this.store.dispatch(new TodoRemove(index));
  }

}
