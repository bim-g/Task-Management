import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ITask } from 'src/app/interface/ITask';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();

  text!:string;
  day!:string;
  reminder:boolean=false;
  showAddTask:boolean=false;
  subsription!:Subscription;
  msgtitle:string="Error Input";
  msgtext!:string;

  @ViewChild(ModalComponent) child!:ModalComponent

  constructor(private uiService:UiService) {
    this.subsription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value);
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text) {
      this.msgtext="Please enter a task";
      this.child.toggleModal();
      return;
    };
    let mydate= new Date();
    let taskdate= new Date(this.day);
    // if(mydate.getTime()<taskdate.getTime()){
    //   this.msgtext="Day of task should be greater than now";
    //   this.child.toggleModal();
    //   return;
    // }

      const newTask={
        text:this.text,
        day:taskdate.toString(),
        reminder:this.reminder
      }
      // emit the new task
    this.onAddTask.emit(newTask);
      // init the task service
      this.day="";
      this.text="";
      this.reminder=false;
  }
}
