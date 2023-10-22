import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})


/* export class TodolistComponent implements OnInit {
  taskArray = [
    { taskName: 'Tarea angular', description: 'No me gusta angular', isCompleted: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      description: form.controls['description'].value,
      isCompleted: false
    });

    form.reset();
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
} */

/* ------------------- ejemplo agregando el servicio----------- */



export class TodolistComponent implements OnInit {
taskArray: any;

  constructor(private dataService: DataService) { } // Inyecta el servicio en el constructor

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const task = {
      taskName: form.controls['task'].value,
      description: form.controls['description'].value,
      isCompleted: false
    };

    // Agrega la tarea al servicio para compartirla con otros componentes
    this.dataService.addTask(task);

    form.reset();
  }
}

/* ----codigo con local storage--- */

/* 
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {
  taskArray = [];

  constructor() { }

  ngOnInit(): void {
    // Recuperar los datos del almacenamiento local al cargar la página
    const savedData = localStorage.getItem('taskData');
    if (savedData) {
      this.taskArray = JSON.parse(savedData);
    }
  }

  onSubmit(form: NgForm) {
    const newTask = {
      taskName: form.controls['task'].value,
      description: form.controls['description'].value,
      isCompleted: false
    };

    this.taskArray.push(newTask);

    // Guardar los datos actualizados en el almacenamiento local
    localStorage.setItem('taskData', JSON.stringify(this.taskArray));

    form.reset();
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);

    // Guardar los datos actualizados en el almacenamiento local
    localStorage.setItem('taskData', JSON.stringify(this.taskArray));
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;

    // Guardar los datos actualizados en el almacenamiento local
    localStorage.setItem('taskData', JSON.stringify(this.taskArray));
  }
}
 */