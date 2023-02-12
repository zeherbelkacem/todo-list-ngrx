
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { Task } from '../model/task';
import { getTasksSuccess, saveTaskSuccess } from './task.action';

export interface AppState {
  tasks: Task[];
}

export const initialState: Task[] =  []

export const taskReducer = createReducer(
  initialState,
  on(getTasksSuccess, (state, { tasks }) => tasks),
  on(saveTaskSuccess, (state, { task }) => [...state, task])
);
