import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { TaskService } from '../service/task.service';
import {
  getTasksFailure,
  getTasksRequest,
  getTasksSuccess,
} from './task.action';

@Injectable()
export class Effects {
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

  constructor(
    private readonly actions$: Actions,
    private store: Store,
    private taskService: TaskService
  ) {}
}
