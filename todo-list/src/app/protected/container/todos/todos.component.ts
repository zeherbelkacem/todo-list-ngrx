import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent {
  activeState: boolean[] = [true, false, false, false];
  toggle(index: number){
    this.activeState[index] = !this.activeState[index];

  }
}
