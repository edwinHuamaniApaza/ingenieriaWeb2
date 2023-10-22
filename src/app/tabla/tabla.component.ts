import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})


export class TablaComponent implements OnInit {
  taskArray: any[] = [];

  constructor(private dataService: DataService) {

   }

  ngOnInit(): void {
   

    // Suscríbete al servicio para recibir las tareas agregadas
    this.dataService.taskData$.subscribe(data => {
      this.taskArray = data;
    });
  }

  onDelete(index: number) {
    this.dataService.removeTask(index); // Puedes agregar un método para eliminar tareas en el servicio
  }

 /*  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  } */
}

/* ---Codigo con local storage-- */
/* 
export class TablaComponent implements OnInit {
  taskArray = [];

  constructor() { }

  ngOnInit(): void {
    // Recuperar los datos del almacenamiento local al cargar la página
    const savedData = localStorage.getItem('taskData');
    if (savedData) {
      this.taskArray = JSON.parse(savedData);
    }
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