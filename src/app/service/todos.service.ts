import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../task/view-task/view-task.component';
 
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  task: Tasks[];
  

  public baseUrl: string = 'http://localhost:3000/';
  
  
  constructor(private _http:HttpClient) { }

  listTask(): Observable<Tasks[]>{
    return this._http.get<Tasks[]>(this.baseUrl +'userList')
  }

  addTask(form){
   return this._http.post<Tasks[]>(this.baseUrl + 'userList', form.value)
  }

  deleteTask(id){
   return this._http.delete<Task[]>(this.baseUrl +'userList/' + id)   
  }
}