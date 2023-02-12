import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Task } from '../model/task';

//Save new task
export const saveTaskRequest = createAction(
  '[Protected] SAVE TASK REQUEST',
  props<{task: Task}>(),
)
export const saveTaskSuccess = createAction(
  '[Protected] SAVE TASK SUCCESS',
  props<{task: Task}>()
)
export const saveTaskFailure = createAction(
  '[Protected] SAVE TASK FAILURE',
  props<{failureReponse: HttpErrorResponse}>()
);

//Retrieve all vailable task, done or not
export const getTasksRequest = createAction('[Protected] GET TASKS REQUEST',);
export const getTasksSuccess = createAction(
  '[Protected] GET TASKS SUCCESS',
  props<{ tasks: Task[] }>()
);
export const getTasksFailure = createAction(
  '[Protected] GET TASKS FAILURE',
  props<{ failureResponse: HttpErrorResponse }>()
);
