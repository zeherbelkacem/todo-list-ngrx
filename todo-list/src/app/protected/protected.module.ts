import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './container/todos/todos.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { CardModule, } from 'primeng/card';
import {AutoCompleteModule } from 'primeng/autocomplete'

import { SaveTodoComponent } from './components/save-todo/save-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllTodosComponent } from './components/all-todos/all-todos.component';

@NgModule({
  declarations: [TodosComponent, SaveTodoComponent, AllTodosComponent],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    DialogModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  exports: [TodosComponent, AllTodosComponent],
})
export class ProtectedModule {}
