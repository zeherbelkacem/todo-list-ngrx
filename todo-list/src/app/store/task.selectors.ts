import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '../model/task';

export const tasksFeatureState = createFeatureSelector<Task[]>('tasks');

export const selectTasks = createSelector(tasksFeatureState, (tasks) => tasks);
