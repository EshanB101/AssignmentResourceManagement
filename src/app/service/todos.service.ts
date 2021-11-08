import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../task/view-task/view-task.component';
 
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public baseUrl: string = 'http://localhost:3000/';
  
  constructor(private _http:HttpClient) { }

  listTask(): Observable<Tasks[]>{
    return this._http.get<Tasks[]>(this.baseUrl +'userList')
  }

  addTask(form){
   return this._http.post<Task[]>(this.baseUrl + 'userList', form.value)
  }

  // deleteTask(){
  //  return this._http.get<Task[]>(this.baseUrl + 'userList')
  // }
}