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
    // return this.http.post<Task>(
    //   'https://zeherbelkacem-fantastic-system-75xwww65pw92w5q9-8086.preview.app.github.dev/api/todo/v1/',
    //   task
    // );
    return this.http.post<Task>(
      'http://localhost:8086/api/todo/v1/',
      task
    );
  }

  public getAllTasks(): Observable<Task[]> {
    // return this.http.get<Task[]>(
    //   'https://zeherbelkacem-fantastic-system-75xwww65pw92w5q9-8086.preview.app.github.dev/api/todo/v1/'
    // );
    return this.http.get<Task[]>(
      'http://localhost:8086/api/todo/v1/'
    );
  }
}
