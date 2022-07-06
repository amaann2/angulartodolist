import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  implements OnInit {
  @Input()
  todo: todo = new todo;
  @Output() tododelete: EventEmitter<todo> = new EventEmitter();

  constructor() { }
  onClick(todo:todo){
    console.log(todo)
    this.tododelete.emit(todo)
  
  }

  ngOnInit(): void {
  }

}
