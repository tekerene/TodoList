

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-app';
  todos = [ {
    label: 'teke rene',
    done: false,
    priority:3
  },
  {
    label: 'Doing Laundry',
    done: true,
    priority:1
  },
  {
    label: 'Paying the electric bill',
    done: false,
    priority:2
  },
  {
    label: 'Attending a class on php',
    done: false,
    priority:4
  }
];
addTodo(newTodoLabel) {
  var newTodo = {
    label: newTodoLabel,
    priority:1,
    done: false
  };
  this.todos.push(newTodo);
}
deleteTodo(todo) {
  this.todos = this.todos.filter(t => t.label !== todo.label );
}
}