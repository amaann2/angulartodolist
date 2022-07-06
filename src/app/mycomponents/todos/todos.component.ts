import { Component, OnInit } from '@angular/core';
import { todo } from '../../todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'heeloo',
        desc: 'this is 1 dexc',
        active: true,
      },
      {
        sno: 2,
        title: 'heeloo',
        desc: 'this is 1 dexc',
        active: true,
      },
      {
        sno: 3,
        title: 'heeloo',
        desc: 'this is 1 dexc',
        active: true,
      },
      {
        sno: 3,
        title: 'heeloo',
        desc: 'this is 1 dexc',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}

  deletetodo(todo: todo) {
    console.log(todo);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  addtodo(todo: todo) {
    console.log(todo);
    this.todos.push();
  }
}
