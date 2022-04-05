import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import {ITask} from 'src/app/interface/ITask';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3210/tasks';

  constructor(private http:HttpClient) { }

  getTasks():Observable<ITask[]>{
    const tasks = of(TASKS);
    return this.http.get<ITask[]>(this.apiUrl);
  }
  deleteTask(task:ITask):Observable<ITask>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.delete<ITask>(url);
  }
  updateTaskReminder(task:ITask):Observable<ITask>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.put<ITask>(url,task,httpOption);
  }
  addTask(task:ITask):Observable<ITask>{
    return this.http.post<ITask>(this.apiUrl,task,httpOption);
  }
}
