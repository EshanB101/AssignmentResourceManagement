import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

//material Module
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { ViewTaskComponent } from './view-task/view-task.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AddTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],

  exports: [
    AddTaskComponent,
    ViewTaskComponent
  ],

  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration: 2000}
    }
  ]
})
export class TaskModule { }
