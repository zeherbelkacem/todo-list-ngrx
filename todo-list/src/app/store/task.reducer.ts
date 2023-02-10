import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { Task } from '../model/task';
import { getTasksSuccess } from './task.action';

export interface AppState {
  tasks: Task[];
}

export const initialState: AppState = {
  tasks: [],
};

export const taskReducer = createReducer(
  initialState.tasks,
  on(getTasksSuccess, (state, { tasks }) => tasks)
);
