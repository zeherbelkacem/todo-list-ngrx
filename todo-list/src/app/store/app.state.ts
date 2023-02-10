import { ActionReducerMap } from '@ngrx/store';
import { AppState, taskReducer } from './task.reducer';

export const reducers: ActionReducerMap<AppState> = {
  tasks: taskReducer,
};
