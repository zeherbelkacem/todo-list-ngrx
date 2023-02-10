import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Task } from '../model/task';

export const getTasksRequest = createAction('[Protected] GET TASKS REQUEST');

export const getTasksSuccess = createAction(
  '[Protected] GET TASKS SUCCESS',
  props<{ tasks: Task[] }>()
);

export const getTasksFailure = createAction(
  '[Protected] GET TASKS FAILURE',
  props<{ failureResponse: HttpErrorResponse }>()
);
