import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTasksNotEmpty } from 'src/app/store/task.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  constructor(private store: Store) {}

  tasksNotEmpty$ = this.store.select(selectTasksNotEmpty);
  activeState: boolean[] = [false, false, false, false];

  ngOnInit(): void {}

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
}
