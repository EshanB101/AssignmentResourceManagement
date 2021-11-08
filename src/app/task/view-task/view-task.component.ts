import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';

export interface Tasks{
  id: number;
  name: string;
  task: string;
  status: any;
  date: any;
  
}

const ELEMENT_DATA: Tasks[] = [];


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  listTasks: Tasks[] = [];
  
  displayedColumns: string[] = ['id', 'name', 'task', 'status', 'date', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor(private todoService:TodosService) { }

  ngOnInit(): void {
      this.todoService.listTask()
      .subscribe(data=> {
        this.listTasks = data;
      })
  }

  onDelete(obj){
   this.listTasks = this.listTasks.filter((val,index)=>{
     return val.id != obj.id;
   })
    
   }

}
