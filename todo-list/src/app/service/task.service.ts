import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private http: HttpClient) {}

  public saveTask(task: Task): Observable<Task> {
    return this.http.post<Task>('https://zeherbelkacem-super-duper-guacamole-4vr6665wxpv37q74-8086.preview.app.github.dev/api/todo/v1/save', task);
  }

  public getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(
      'https://zeherbelkacem-fantastic-system-75xwww65pw92w5q9-8086.preview.app.github.dev/api/todo/v1/todos'
    );
  }
}
