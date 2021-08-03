import { Component } from "@angular/core";
import { EmployeeService } from "src/app/service/employee.service";

@Component({
    selector: 'app-list-employee',
    templateUrl: './list-employee.component.html'
})
export class ListEmployeeComponent {

    employees: any[] = [];

    constructor(
      private employeeService: EmployeeService
    ) {
       this.getEmployees();
    }
  
   getEmployees() {
    this.employeeService.getEmplyeeList()
    .subscribe((response: any) => {
      this.employees = response.data;
    });
   }
} 