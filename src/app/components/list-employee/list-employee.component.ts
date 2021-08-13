import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from "src/app/service/employee.service";

@Component({
    selector: 'app-list-employee',
    templateUrl: './list-employee.component.html'
})
export class ListEmployeeComponent {

    employees: any[] = [];
    searchText = '';
    searchLetter = '';

    letters = ['a','b', 'c']

    constructor(
      private employeeService: EmployeeService,
      private router: Router,
      private activatedRoute:ActivatedRoute
    ) {
       this.getEmployees();
    }
  
   getEmployees() {
    this.employeeService.getEmplyeeList()
    .subscribe((response: any) => {
      this.employees = response.data;
    });
   }

   onEdit(employeeId: any) {
     this.router.navigate(['edit-employee', employeeId]);
   }
   addLetter() {
     this.letters.push('a');
   }
} 