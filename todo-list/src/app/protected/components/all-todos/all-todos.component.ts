import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task';
import { selectTasks, selectTasksNotEmpty } from 'src/app/store/task.selectors';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
})
export class AllTodosComponent implements OnInit{

  selectedCountry: any;

  countries: any[] = [];
  filteredCountries!: any[];
  filterCountry(event: any) {
    console.log(event.query);

    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  tasks$ = this.store.select(selectTasks);
  @Input()
  tasksNotEmpty$!: Observable<Boolean>;
  tasksCols: any[] = []

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.tasksCols = [
      {field: "id", header: "ID"},
      {field: "title", header: "Title"},
      {field: "relatedState", header: "Title"},
      {field: "done", header: "Status"},
      {field: "description", header: "Description"},
    ]
  }

  statuses: any[] = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];
  relatedStates: any[] = [
    { label: 'Done', value: 'DONE' },
    { label: 'Todo', value: 'TODO' },
  ];

  sort(columnName: string){
    console.log('sorting');
  }

  filter(filterName: any){
    console.log(filterName);
  }
}
