import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../../model/task';
import { TaskService } from '../../../service/task.service';
import { saveTaskRequest } from '../../../store/task.action';

@Component({
  selector: 'app-save-todo',
  templateUrl: './save-todo.component.html',
  styleUrls: ['./save-todo.component.css'],
})
export class SaveTodoComponent {
  myTodoForm!: FormGroup;
  error = false;
  todo$!: Observable<Task>;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private taskService: TaskService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // let id = this.activateRoute.snapshot.params['id'];

    // if(id !== 0){
    //   this.todo$ = this.taskService.getTodoById(id);
    //   this.todo$.subscribe((t)=>{
    //     this.myTodoForm = this.fb.group({
    //       id: [t.id],
    //       title: [t.title, Validators.required],
    //       description: [t.description],
    //     });
    //   })
    // }
    this.myTodoForm = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      description: [],
    });
  }

  addTodo(myTodoForm: FormGroup) {
    this.store.dispatch(
      saveTaskRequest({
        task: {
          id: myTodoForm.value.id,
          title: myTodoForm.value.title,
          relatedState: 'TODO',
          done: false,
          description: myTodoForm.value.description,
        },
      })
    );
  }

  // get title() {
  //   return this.myTodoForm.get('title');
  // }
}
