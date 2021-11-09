import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TodosService } from 'src/app/service/todos.service';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

   employees:any;

 
  constructor(private todoService: TodosService, private activatedRoute:ActivatedRoute, private _snackBar:MatSnackBar) { }

    ngOnInit(): void {
      this.todoService.listTask()
      .subscribe(data=> this.employees = data)
  }

  onAdd(form: NgForm){
    this.todoService.addTask(form)
    .subscribe(data=>{
      this._snackBar.open('Task Assigned Successfully')

      form.reset()
    })
  }  
  
}
