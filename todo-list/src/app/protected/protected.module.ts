import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './container/todos/todos.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SaveTodoComponent } from './components/save-todo/save-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent, SaveTodoComponent],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TodosComponent],
})
export class ProtectedModule {}
