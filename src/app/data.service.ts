
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private taskData = new BehaviorSubject<any[]>([]);
  taskData$ = this.taskData.asObservable();

  addTask(task: any) {
    const currentData = this.taskData.value;
    currentData.push(task);
    this.taskData.next(currentData);
  }

  removeTask(index: number) {
    const currentData = this.taskData.value;
    if (index >= 0 && index < currentData.length) {
      currentData.splice(index, 1);
      this.taskData.next(currentData);
    }
  }


}
