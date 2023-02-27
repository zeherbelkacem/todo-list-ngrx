import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';
import {
  getTasksFailure,
  getTasksRequest,
  getTasksSuccess,
  saveTaskFailure,
  saveTaskRequest,
  saveTaskSuccess,
} from './task.action';

@Injectable()
export class Effects {
  saveTaskRequest_saveTaskResponse = createEffect(() =>
    this.actions$.pipe(
      ofType(saveTaskRequest),
      switchMap((action) => {
        return this.taskService.saveTask(action.task).pipe(
          map((task) => saveTaskSuccess({ task: task })),
          catchError((failureResponse) => of(saveTaskFailure(failureResponse)))
        );
      })
    )
  );

  getTasksRequest_getTasksResponse = createEffect(() =>
  this.actions$.pipe(
    ofType(getTasksRequest),
    switchMap((_) => {
      return this.taskService.getAllTasks().pipe(
        map((tasks) => getTasksSuccess({ tasks: tasks })),
        catchError((failureResponse) => of(getTasksFailure(failureResponse)))
      );
    })
  )
);

// redirect_saveTaskResponse_updateTaskResponse = createEffect(() =>{
//   return this.actions$.pipe(
//     ofType(saveTaskSuccess),
//     tap(() => {
//       this.router.navigate(['/']);
//     })
//   )
// }

// );

  constructor(
    private readonly actions$: Actions,
    private store: Store,
    private http: HttpClient,
    private taskService: TaskService,
    private router: Router
  ) {}
}
