
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TablaComponent } from './tabla/tabla.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'todolist', pathMatch: 'full' },
  { path: 'todolist', component: TodolistComponent },
  { path: 'tabla', component: TablaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
