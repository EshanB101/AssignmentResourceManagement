//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

//angularMaterial Module
import {MatDatepickerModule} from '@angular/material/datepicker';

//Components
import { AppComponent } from './app.component';

//From Layout
import { LayoutModule } from './layout/layout.module';
import { TaskModule } from './task/task.module';
import { TodosService } from './service/todos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,

    LayoutModule,
    TaskModule,
    MatDatepickerModule

    
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
