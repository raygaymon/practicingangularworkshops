import { formatDate } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit{

  task: {desc: String, priority: String, due: Date}
  taskList= []
  //format the date so that it becomes comparable
  now = formatDate(new Date(), 'yyyy-MM-dd', 'en_US')

  private fb = inject(FormBuilder)
  toDoForm: FormGroup

  ngOnInit () : void {
    this.toDoForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      'desc': this.fb.control<String>('', [Validators.required, Validators.minLength(5)]),
      'priority': this.fb.control<String>('Low'),
      'due': this.fb.control<Date>(undefined, this.dateMustBeFuture.bind(this))
    })
  }

  submit() {
    this.task = this.toDoForm.value
    this.taskList.push(this.task);
    console.log(this.task)
  }

  dateMustBeFuture(control: FormControl): {[s: string]: boolean} {
    console.log(control.value)
    console.log(this.now)
    if(this.now > control.value) {
      return {'dateNotFuture': true}
    }
    else {
      return null
    }
  }
}
