import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  
  employees: Employee[] = [
    {
      id: '1',
      name: 'Andrea',
      surname: 'Brambilla',
      email: 'andrea.brambilla@gmail.com',
      mobile: 3419876217
    },
    {
      id: '2',
      name: 'Marco',
      surname: 'Rossi',
      email: 'marco.rossi@gmail.com',
      mobile: 3249871627
    },
    {
      id: '3',
      name: 'Giulia',
      surname: 'Brasco',
      email: 'giulia.brasco@gmail.com',
      mobile: 3214398712
    }
  ];
  constructor() {}

  ngOnInit(): void {
  }

}
