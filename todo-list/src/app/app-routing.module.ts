import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SaveTodoComponent } from './protected/components/save-todo/save-todo.component';
import { TodosComponent } from './protected/container/todos/todos.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
    children: [],
  },
  {
    path: 'save-todo',
    component: SaveTodoComponent,
  },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }, //ok
  { path: '**', component: PageNotFoundComponent }, //ok
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
