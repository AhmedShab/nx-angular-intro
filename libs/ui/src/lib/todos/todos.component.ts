import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@org2/data';

@Component({
  selector: 'org2-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit(): void {}

}
