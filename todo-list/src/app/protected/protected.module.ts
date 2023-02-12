import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { TodosComponent } from './container/todos/todos.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    AccordionModule,
    ButtonModule,
    ToastModule
  ],
  exports: [TodosComponent],
})
export class ProtectedModule { }
